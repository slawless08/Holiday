var firstTitle = document.getElementById("first-title");
var secondTitle = document.getElementById("second-title");
var thirdTitle = document.getElementById("third-title");
var fourthTitle = document.getElementById("fourth-title");

var firstDesc = document.getElementById("first-desc");
var secondDesc = document.getElementById("second-desc");
var thirdDesc = document.getElementById("third-desc");
var fourthDesc = document.getElementById("fourth-desc");

localStorage.getItem("Name-One");
localStorage.getItem("Name-Two");
localStorage.getItem("Name-Three");
localStorage.getItem("Name-Four");
localStorage.getItem("Description-One");
localStorage.getItem("Description-Two");
localStorage.getItem("Description-Three");
localStorage.getItem("Description-Four");

firstTitle.innerText = localStorage.getItem("Name-One");
secondTitle.innerText = localStorage.getItem("Name-Two");
thirdTitle.innerText = localStorage.getItem("Name-Three");
fourthTitle.innerText =localStorage.getItem("Name-Four");

firstDesc.innerText = localStorage.getItem("Description-One");
secondDesc.innerText = localStorage.getItem("Description-Two");
thirdDesc.innerText = localStorage.getItem("Description-Three");
fourthDesc.innerText = localStorage.getItem("Description-Four");

var search = document.querySelector(".button");

function letsSearch() {
  document.location.href = 'index.html';
}

search.addEventListener("click", function(){
    
    letsSearch()
});
