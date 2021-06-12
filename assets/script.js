$(document).ready(function () {

    function getLocation(){
        fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=b16d49c2021b4770b4f70583a0ea01f0&fields=country,country_code')
      .then(function (response) {
        return response.json();
      })
      .then(function(data){
          console.log(data);
          console.log(data.country_code);
          var countryCode = data.country_code
          console.log(countryCode); 
  
          localStorage.setItem("Country-code", countryCode);
          return countryCode;
      });
    }
    getLocation();
    })
var country = localStorage.getItem("Country-code");

// variables for text entry box and button & for holding text entry value
var entryBox = document.querySelector(".input"); //text entry box class
var search = document.querySelector(".button"); //search button class
var entry;

// letsParty function moves to next HTML page
// it is called in the function fourLoop after all returned data is saved to local memory
function letsParty() {
  document.location.href = 'index2.html';
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
// is entry a date or NaN
// to use in entry verification
// date check defined & isEntryDate called in search button listener event 
var dateCheck;

function isEntryDate() {
  function verDate(dateCheck) {
    if (isNaN(dateCheck)) {
      // error grabs blank h tag in HTML & makes message pop up
      var error = document.querySelector(".error");
      error.innerText = "Please enter a date in the format mm-dd-yyyy";
    } 
}
}

// clears input box once search initiated (because we want to clear "bad" entry info)
function reset(){
  entryBox.value='';
}

// variables are defined within search button listener event
var month;
var dayString;
var day;
var year;

// fun is named within API request, is an array of all holidays returned
var fun;

// fourLoop works inside of funTimes which, when working with the data from the API fetch request (inside the partyDates function), saves four items to local memory from API information array starting at 0 or 1/4 increments of array length (midDays) based on what day of the month user enters (turningPoint)
var midDays; 
var turningPoint;
var j;

function fourLoop (){
  for(i = 0; i < 4; i++){
    console.log(fun[i + j].name);
    localStorage.setItem("Name-One", (fun[0 + j].name));
    localStorage.setItem("Name-Two", (fun[1 + j].name));
    localStorage.setItem("Name-Three", (fun[2 + j].name));
    localStorage.setItem("Name-Four", (fun[3 + j].name));
    localStorage.setItem("Description-One", (fun[0 + j].description));
    localStorage.setItem("Description-Two", (fun[1 + j].description));
    localStorage.setItem("Description-Three", (fun[2 + j].description));
    localStorage.setItem("Description-Four", (fun[3 + j].description));
    letsParty();
  }
}

function funTimes (){
  if (day < 9) {
    turningPoint = 0;
    j = turningPoint;
    fourLoop ();
  }  else if (day < 16 && day >= 9) {
    turningPoint = Math.trunc(midDays);
    console.log(turningPoint);
    j = turningPoint;
    fourLoop ();
  }  else if (day < 24 && day >= 16) {
    turningPoint = Math.trunc(midDays);
    j = parseInt(turningPoint) * 2;
    fourLoop ();
  }  else if (day >= 24) {
    turningPoint = Math.trunc(midDays);
    console.log(turningPoint);
    j = parseInt(turningPoint) * 3;
    fourLoop ();
  }
}

function partyDates (){
  // API call with user info inserted
  requestUrl = 'https://calendarific.com/api/v2/holidays?api_key=35103c5d8d12361a3b9ac8b97222182f16d7ea99&country=' + country + '&month=' +month+ '&year=' +year;



  fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        fun = (data.response.holidays);
        midDays = parseInt(fun.length) / 4;
        funTimes();
      });
}

// search button listener event saves text entry value 
search.addEventListener("click", function(){
  entry = entryBox.value;
  dateCheck= Date.parse(entry);

  reset();
  isEntryDate()

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
  // separate day, month and year from entry
  // day is turned into an number and leading zero removed if any
  month = entry.substring(0, 2);
  dayString = entry.substring(3, 5);
  day = parseInt(dayString, 10);
  year = entry.substring(6);

  partyDates();
});


