var fun;

var requestUrl = 'https://calendarific.com/api/v2/holidays?api_key=35103c5d8d12361a3b9ac8b97222182f16d7ea99&country=US&month=08&year=2021'


fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      fun = (data.response.holidays);
    console.log(fun);
    console.log(fun.length);
    console.log(fun[day].date.datetime.day);
  }
      );

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
// is entry a date or NaN
var entry = "07/11/2021";

var dateCheck = Date.parse(entry);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
function verDate(dateCheck) {
  if (isNaN(dateCheck)) {
    return 'try again';
  }
  return "happy Birthday";
}

console.log(verDate(dateCheck));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
// separate day, month and year from entry
var month = entry.substring(0, 2);
var day = parseInt(entry.substring(3, 5));
var year = entry.substring(6);

console.log(month, day, year);