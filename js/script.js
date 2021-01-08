var settings = {
  "url": "https://www.themealdb.com/api/json/v1/1/random.php",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Cookie": "__cfduid=d00e058a37eb5cdfd93b44f0831699dc41610094802"
  },
};

$(document).ready(function () {

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
    
}