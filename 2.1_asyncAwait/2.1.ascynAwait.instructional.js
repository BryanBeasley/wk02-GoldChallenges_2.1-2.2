/* 
    1. Write a fat arrow async function that does the following:
        - uses await to fetch data from this endpoint - 'https://swapi.dev/api/people/1/'
        - uses await to jsonify the response received from the fetch
        - console.log's the results of the fetch before console.logging a message saying 'this should print last'
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

// async function slowResult() {
//     await fetch("https://swapi.dev/api/people/1/")
//      .then(await res => res.json())
//      .then(json => console.log(json))
//     console.log("this should print last!")
//   }

//   slowResult();

let baseURL = "https://swapi.dev/api/people/1/";

const challenge = async () => {
  const wisdom = await fetch(baseURL);
  const json = await wisdom.json();
  console.log(json, "this should print last!");
};

challenge();
