/*
Grabs the country and country code from the user's IP address 

Currently, countryCode does not get stored properly, need to figure out how to call the country code outside of the fetch
*/
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

