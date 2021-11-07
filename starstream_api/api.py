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


def check_request_params(request, param):
    if (request.args and param in request.args) or (request.get_json() and param in request.get_json()):
        return request.args.get(param) or request.get_json().get(param)
    return None

def return_data(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """

    df = pd.read_csv(hygdf_blob)
    if sort_by := check_request_params(request, 'sort_by'):
        if ascending := check_request_params(request, 'ascending'):
            df = df.sort_values(by=sort_by, ascending=bool(ascending))
        else:
            df = df.sort_values(by=sort_by, ascending=False)
    if count := check_request_params(request, 'count'):
        df = df.iloc[:int(count)]

    if check_request_params(request, 'csv'):
        return df.to_csv()
    else:
        return df.to_json()
