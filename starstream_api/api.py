from io import StringIO
import pandas as pd

from google.cloud import storage

BUCKET_NAME = 'starstream-api-data-bucket'
file_path = 'hygdata_v3_min.csv'

storage_client = storage.Client()
bucket = storage_client.get_bucket(BUCKET_NAME)

hygdf_blob = bucket.blob(file_path)
hygdf_blob = hygdf_blob.download_as_string()
hygdf_blob = hygdf_blob.decode('utf-8')
hygdf_blob = StringIO(hygdf_blob)  #tranform bytes to string here

df = pd.read_csv(hygdf_blob)

def return_data(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    return df.to_json()
