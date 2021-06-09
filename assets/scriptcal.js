// variables for text entry box and button & for holding text entry value
var entryBox = document.getElementById(""); //text entry box ID
var search = document.getElementById(""); //search button ID
var entry;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
// is entry a date or NaN
// to use in entry verification
entry = "07/16/2021"; //for text purposes... comment out when hooked to full HTML
var dateCheck = Date.parse(entry);

function verDate(dateCheck) {
  if (isNaN(dateCheck)) {
    return 'try again';
  }
  return "happy Birthday";
}
// NEED to add the inner HTML alert to div above the input box >> please enter valid date
console.log(verDate(dateCheck));

// clears input box once search initiated (because we want to clear "bad" entry info)
function reset(){
  document.getElementById( "entryBox" ).value='';
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
// separate day, month and year from entry
// day is turned into an number and leading zero removed if any
var month = entry.substring(0, 2);
var dayString = entry.substring(3, 5);
var day = parseInt(dayString, 10);
var year = entry.substring(6);

// fun is named within API request, is an array of all holidays returned
var fun;

// fourLoop works inside of funTimes which, when working with the data from the API fetch request (inside the partyDates function), returns four items from API information array starting at 0 or 1/2 array length (midDays) based on what day of the month user enters (turningPoint)
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
  }  else if (day >= 17) {
    turningPoint = midDays;
    console.log(turningPoint);
    j = turningPoint;
    fourLoop ();
  }
}

function partyDates (){
  // API call with user info inserted
  requestUrl = 'https://calendarific.com/api/v2/holidays?api_key=35103c5d8d12361a3b9ac8b97222182f16d7ea99&country=US&month=' +month+ '&year=' +year;



  fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        fun = (data.response.holidays);
        midDays = parseInt(fun.length) / 2;
        funTimes();
      });
  // NEED TODO save API returns to memory
  // NEED TODO move it to next page
}

// search button listener event saves text entry value 
// NEED to add link to next HTML page
//NEXT 
// search.addEventListener("click", function(){
//   entry = entryBox.value;
//   console.log(entryBox);
//   reset();
//   partyDates();
// });

partyDates();