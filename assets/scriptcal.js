// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
// is entry a date or NaN
// to use in entry verification
var entry = "07/24/2021";
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
// day is turned into an number and leading zero removed if any
var month = entry.substring(0, 2);
var dayString = entry.substring(3, 5);
var day = parseInt(dayString, 10);
var year = entry.substring(6);



// API call with user info inserted
requestUrl = 'https://calendarific.com/api/v2/holidays?api_key=35103c5d8d12361a3b9ac8b97222182f16d7ea99&country=US&month=' +month+ '&year=' +year;

// fun is named within API request, is an array of all holidays returned
var fun;
var midDays; 

var turningPoint;
var j;
function fourLoop (){
  for(i = 0; i < 4; i++){
  console.log(fun[i + j].name);
  console.log(fun[i + j].description);
  }
}



function funTimes (){
      if (day < 17) {
      turningPoint = 0;
      j = turningPoint;
      fourLoop ();
    }  else if (day > 17) {
      turningPoint = midDays;
      console.log(turningPoint);
      j = turningPoint;
      console.log(typeof j);
      fourLoop ();
    }
}

fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      fun = (data.response.holidays);
      midDays = parseInt(fun.length) / 2;
    console.log(fun);
    console.log(fun.length);
    console.log(typeof midDays);
    funTimes();
    
}
      );

