## StarStream API

This API provides data from [astronexus.com/hyg](astronexus.com/hyg)

API endpoint: [https://starstream-api-gateway-b2dzz7qh.uc.gateway.dev/min-data](https://starstream-api-gateway-b2dzz7qh.uc.gateway.dev/min-data)

- this data is stored in Google Cloud Storage
- then cloud function reads that data and apply transformation on the data
- Cloud function's open API endpoint is then passed to GCP API Gateway tool to secure that connection and to easily update the API endpoints by using config files

## API parameters

Following parameters are available for the API

- count -> Integer
  - Number of star's data returned

- sort_by -> String
  - Sort the data by any specific field
  - the current available fields are
    -['hd', 'hr', 'proper', 'dist', 'mag', 'absmag', 'x', 'y', 'z']

- ascending -> Boolean
  - Set if the sort_by should be ascending or descending
  - 1 for ascending and 0 for descending

- csv -> Boolean
  - Change the output format from json to csv

## Example

[[gateway]/min-data?count=10&sort_by=id&ascending=0&csv=1](https://starstream-api-gateway-b2dzz7qh.uc.gateway.dev/min-data?count=10&sort_by=id&ascending=0&csv=1)

This would return first 10 stars sorted by id in descending order and in csv format
