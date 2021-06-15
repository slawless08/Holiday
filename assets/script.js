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

// variables for text entry box and button & for holding text entry value
var entryBox = document.querySelector(".input"); //text entry box class
var search = document.querySelector(".button"); //search button class

// variables are defined within search button listener event
var entry;
var month;
var dayString;
var day;
var year;

// search button listener event saves text entry value, checks to see if entry is a valid date, parses month, day, and year from entry, and calls function triggering second API request
search.addEventListener("click", function(){
  entry = entryBox.value;
  var dateCheck = new Date(entry);
  console.log(dateCheck);
  
  entryBox.value ='';

  if (dateCheck == "Invalid Date") {
    document.querySelector(".error").innerText = "Please enter a date in the format mm-dd-yyyy";
  }

  month = (dateCheck.getMonth()) + 1;
  day = dateCheck.getDate();
  year = dateCheck.getFullYear();
  partyDates();
});

// partyDates makes API request and designates the point at which results are drawn from the data (based on date entered by user)
var fun;
var midDays; 
var turningPoint;
function partyDates (){
  var country = localStorage.getItem("Country-code");
  requestUrl = 'https://calendarific.com/api/v2/holidays?api_key=35103c5d8d12361a3b9ac8b97222182f16d7ea99&country=' + country + '&month=' +month+ '&year=' +year;

  fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        fun = (data.response.holidays);
        midDays = parseInt(fun.length) / 4;
        
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
      });
}

// fourLoop draws out the names of four holidays and their descriptions & saves them to local storage and once they are saved moves to second html file
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
    document.location.href = 'index2.html';
  }
}