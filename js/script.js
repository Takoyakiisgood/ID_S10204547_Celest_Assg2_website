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

          $("#favouritebtn").click(function() {
              var existingfavlist = JSON.parse(localStorage.getItem("favlist"));
              if(existingfavlist == null) {
                existingfavlist = [];
              };
              localStorage.setItem("food", JSON.stringify(food));
              existingfavlist.push(food);
              localStorage.setItem("favlist", JSON.stringify(existingfavlist));
          });
        });
    });

    $("#generatefav").click(function() {
      const favlist = JSON.parse(localStorage.getItem("favlist"));

      randnumber = Math.floor(Math.random() * ((favlist.length)-1)) + 0;
      foodgenerated = favlist[randnumber];

      $("#foodname").html(`${foodgenerated.strMeal}`);
          const ingredients = [];
          for (let i = 1; i <= 20; i++) {
            if (foodgenerated[`strIngredient${i}`]) {
              ingredients.push(
                `${foodgenerated[`strIngredient${i}`]}`
              );
            } else {
              break;
            }
          }
          $('#ingredientsfav').empty();
          $.each(ingredients, function( key, value ) {
            $('#ingredientsfav').append('<li>' + value + '</li>');
          });

          $('#favlistcontent th').remove();
          $.each(favlist, function( key, value ) {
            $('#favlistcontent').append('<tr><th class="table-success">' + value.strMeal + '</th></tr>');
          });
          });

          $("#trybtn").click(function() {
            var username = document.getElementById('username').value;
            var points = 1;
            
            var existingleaderboard = JSON.parse(localStorage.getItem("leaderboard"));
              if(existingleaderboard == null) {
                existingleaderboard = {};
              }
                existingleaderboard[`${username}`] = `${points}`;
                $('#leaderboard tr').remove();
                $.each(existingleaderboard, function( key, value ) {
                $('#leaderboard').append('<tr><th class="table-success">' + username + '</th><th class="table-success">' + value.username + '</th></tr>');
          });

        });
    });
  });
    