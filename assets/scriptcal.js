var requestUrl = 'https://calendarific.com/api/v2/holidays?api_key=35103c5d8d12361a3b9ac8b97222182f16d7ea99&country=US&year=2019,national'

fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)})