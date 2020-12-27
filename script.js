var settings = {
    "url": "https://api.documenu.com/v2/restaurants/search/fields",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "X-API-KEY": "d78d7d9478a5031ba8a0803c184e8840",
      "Cookie": "__cfduid=daf1bf80f2e6814131aa5307fc10fac1c1609050615"
    },
  };

$(document).ready(function () {

    $.ajax(settings).done(function (response) {
        console.log(response);
      });
      
}