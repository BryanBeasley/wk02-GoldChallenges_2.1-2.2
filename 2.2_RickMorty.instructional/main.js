// 'https://rickandmortyapi.com/api/character'

/*
    - Use the provided HTML, CSS, and JS files to fetch images of two separate characters from the Rick and Morty API. You will not need to edit/change anything in the HTML file, everything you need is already there.

    - Your fetch call to the specified endpoint is already defined in the script.js file. Finish coding the necessary promise resolvers for your fetch to access character information from the API.

    - Once you are seeing character information in the console, define a function that will be used to display the data. Your jsonified data from the API will need to be passed to this function.

    Inside the display function you will need to:
    1. Declare two variables used to store the separate character image links from the API.
    2. Grab each image element from the index.html file, and set the src to be the image link you stored in a variable during step 1.

    After you are seeing images of two different characters, use the attached style.css file to style each image with the following properties:
    1. Each image must have a border-radius
    2. Each image must have a border
    3. Each image must be centered
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

const baseURL = "https://rickandmortyapi.com/api/character";

let ricknMortyimg = document.querySelector("img");
const imageBoxOne = document.getElementById("imageOne");
const imageBoxTwo = document.getElementById("imageTwo");

/*
  -Since fetch starts a Promise, we can use the then() method to return that Promise. As a reminder, then() takes up to two arguments: callback functions for the success and failure cases of the Promise. Here, we're just using the success argument and calling it response. If successful, we'll get a response back from the API, and then we can do stuff with it!
  -we can use .json()-it means it reads the body so we can use it and returns a promise once it's done parsing the body as JSON. Now, we can call .json() on the response, and then use another .then() after the Promise resolves, so we can use the json we get back!
  -Now that we've gotten our information back and used .json() on it, let's take a look at it. Put the following console.log in.
*/
//  fetch(baseURL)
//   .then(function(response) {
//    return response.json();
//  })
//    .then(function(json){
//      console.log(json)
//    });

fetch(baseURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    let results = json.results;

    for (r of results) {
      let x = results[0].image;
      let y = results[1].image;
      console.log(x, y);
      imageBoxOne.src = x;
      imageBoxTwo.src = y;
    }
  });
