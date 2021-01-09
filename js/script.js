var settings = {
  "url": "https://www.themealdb.com/api/json/v1/1/random.php",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Cookie": "__cfduid=d00e058a37eb5cdfd93b44f0831699dc41610094802"
  },
};

$(document).ready(function () {

  $.ajax(settings).done(function(response) {
    
    $("#generate").click(function() {
      fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          const food = data.meals[0];
          $("#foodname").html(`${food.strMeal}`);

          const ingredients = [];
          for (let i = 1; i <= 20; i++) {
            if (food[`strIngredient${i}`]) {
              ingredients.push(
                `${food[`strIngredient${i}`]}`
              );
            } else {
              break;
            }
          }
          $('#ingredients').empty();
          $.each(ingredients, function( key, value ) {
            $('#ingredients').append('<li>' + value + '</li>');
          });

        });
    });

  });
    
})