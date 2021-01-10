# ID_S10204547_Celest_Assg2_website

<h1>Random Food Generator</h1>

https://takoyakiisgood.github.io/ID_S10204547_Celest_Assg2_website/

<h2>Overview</h2>

My project allows indecisive users to decide on what food to eat for their next meal (random food generator). Users would also be able to see the ingredients which each meal generated has. Users can “favourite” that food so that it’ll be in their favourite list and they can use this list to decide on what to eat again. For each food they eat based on the random food, they can earn points in the leaderboard.<br>
My project is developed for mobile use.

<h2>Design Process</h2>

<li>As a user i want to be able to be able to generate food so that i can decide on what to have for my next meal.</li>
<li>As a user i want to be able to earn points and compete against other foodies.</li>
<li>As a user i want to be able to save my favourite food items so that i can generate food from my favourite list.</li>

<h2>Features</h2>

<li>Feature 1 - allows users to use the random food generator to generate food to have for their next meal.</li>
<li>Feature 2 - allows users to earn points and compete against other foodies.</li>
<li>Feature 3 - allows users to save their favourite food items so that they can generate food from their favourite list.</li>

<h2>Features Left to Implement</h2>
<li>Feature 1 - allow users to create accounts/sign in to their account to set dietary restrictions they have so that the food generated is something that they can consume instead of manually going through the ingredient list generated alongside with the name of the food, as well as being able to see other user's points in the leaderboard.</li>
<li>Feature 2 - allow users to input restaurant's name and generate food item from that particular restaurant's menu.</li>

<h2>Technologies Used</h2>
<li>JQuery - The project uses JQuery to simplify DOM manipulation.<br>
https://code.jquery.com/jquery-3.5.1.min.js</li>
<li>Bootstrap - The project uses Bootstrap to simplify the CSS of the project.<br>
https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css</li>


<h2>Testing</h2>

<li>Navigation Bar:<br>
<ol>
<li>Click on dropdown icon to reveal the different navigation options.</li>
<li>Click on "Random Food Generator" which is the brand name or "Generate Random Food" would lead to the main page of the generator which is to generate random food.</li>
<li>Click on "Generate Food from Favourite List" would lead to the page where users can generate random food from their favourite list.</li>
</ol>
</li>

<li>Generate Random Food:<br>
<ol>
<li>Click on "Generate" button on the generate random food page.</li>
<li>Random food is generated alongside with its ingredients.</li>
</ol>
</li>

<li>Leaderboard:<br>
<ol>
<li>Input username and click on "Yes" button to signify user have tried the food.</li>
<li>Leaderboard should update the username input by the user together with their respective points.</li>
<li>Problems unresolved:<br>The way i coded the point leaderboard it is only saved in localstorage so other users are unable to see other's points. I was also unable to display the points in the leaderboard and make sure that everytime users tries a food points are added to that specific username</li>
</ol>
</li>

<li>Favourite list:<br>
<ol>
<li>Click on "Generate" button on the generate random food page.</li>
<li>Click on "Favourite" button to add the food item to favourite list in localstorage.</li>
<li>Go to "Generate Food from Favourite List" page and click "Generate" button to generate food from the favourite list as well as to see the food items currently in your favourite list.</li>
<li>Problems unresolved:<br>When users click on "Generate button" multiple times items are added into favourite list corrosponding to the times the button is clicked. Hence the favourite list table would have duplicates of the same food item which unbalances the generator cause some food item's chances of appearing higher.</li>
</ol>
</li>

<h2>Credits</h2>
<h3>Content</h3>
The api i used was from: https://codepen.io/FlorinPop17/full/WNeggor
<h3>Media</h3>
The photo used in the background was obtained from: https://c1.wallpaperflare.com/preview/622/323/592/bear-s-garlic-bread-knife-board.jpg

<h2>Acknowledgements</h2>
I wanted to create a random food generator for myself as I am a indecisive person that can take up to an hour to decide on what to eat :")<br>
I have also took some inspiration from various food generators in the web such as: <br>
<li>https://www.themealdb.com/</li>
<li>https://codepen.io/FlorinPop17/full/WNeggor</li>