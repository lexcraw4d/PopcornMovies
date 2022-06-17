let mainDiv = document.getElementById("app");
let textInput = document.getElementById("movie");
let button = document.getElementById("go");

let imgEl = document.getElementById("renderMovieImg");
let movieInfoEl = document.getElementById("movieInfo");
let cardText = document.getElementById("card-text");
let cardBody = document.querySelector(".card-body");

async function fetchMovie(movie) {
  movieInfoEl.innerHTML = "";

  console.log("card", cardText);

  let requestUrl = `https://www.omdbapi.com/?apikey=5385144e&s=${movie}&type=movie`;

  await fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if ((data.Response = true)) {
        let searchArr = data.Search;
        console.log(searchArr);
        for (let { Title, Year, Poster, imdbID } of searchArr) {
          fetchMovieDetails(imdbID);
          async function fetchMovieDetails(imdbID) {
            let requestUrlDetails = `https://www.omdbapi.com/?apikey=5385144e&i=${imdbID}&plot=full`;
            await fetch(requestUrlDetails)
              .then((response) => {
                return response.json();
              })
              .then(function (data) {
                console.log("data be", data);
                Rated = data.Rated;
                Actors = data.Actors;
                Awards = data.Awards;
                BoxOffice = data.BoxOffice;
                Country = data.Country
                DVD = data.DVD
                Director = data.Director;
                Genre = data.Genre;
                Language = data.Language;
                Metascore = data.Metascore;
                Plot = data.Plot;
                Production = data.Production;

                // // Ratings: (2) .{…}, {…}
                // Released = data.Released

                Runtime = data.Runtime;
              
                Type = data.Type;
                Website = data.Website;
                Write = data.Write;

                imdbRating = data.imdbRating;
                imdbVotes = data.imdbVotes;

                if (Poster != "N/A") {
                  movieInfoEl.innerHTML += `<div class="card row" >
       <img class="card-img-top" src=${Poster} alt="Card image cap">
       <div class="card-body">
         <p class="card-text">${Title}</p>
         <p class="card-text">Year: ${Year}</p>
         <p class="card-text">Rated: ${Rated}</p>
         <p class="card-text">Actors: ${Actors}</p>
         <p class="card-text">Country: ${Country}</p>
         <p class="card-text">DVD: ${DVD}</p>
         <p class="card-text">Director: ${Director}</p>
         <p class="card-text">Genre: ${Genre}</p>
         <p class="card-text">Language: ${Language}</p>
         <p class="card-text">Metascore: ${Metascore}</p>
         <p class="card-text">Plot: ${Plot}</p>
         <p class="card-text">Production: ${Production}</p>
         <p class="card-text">Runtime: ${Runtime}</p>
         <p class="card-text">Type: ${Type}</p>
         <p class="card-text">Website: ${Website}</p>
         <p class="card-text">Write: ${Write}</p>
         <p class="card-text">imdbRating: ${imdbRating}</p>
         <p class="card-text">imdbVotes: ${imdbVotes}</p>
         
       </div>
     </div>`;
                  //  mainDiv.appendChild(newPEl);
                } else {
                  movieInfoEl.innerHTML += `<div class="card row"">
      <img class="card-img-top"    src="./Assets/noPosterFound.png" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">${Title}</p>
        <p class="card-text">Year: ${Year}</p>
        <p class="card-text">Rated: ${Rated}</p>
        <p class="card-text">Actors: ${Actors}</p>
        <p class="card-text">Country: ${Country}</p>
        <p class="card-text">DVD: ${DVD}</p>
        <p class="card-text">Director: ${Director}</p>
        <p class="card-text">Genre: ${Genre}</p>
        <p class="card-text">Language: ${Language}</p>
        <p class="card-text">Metascore: ${Metascore}</p>
        <p class="card-text">Plot: ${Plot}</p>
        <p class="card-text">Production: ${Production}</p>
        <p class="card-text">Runtime: ${Runtime}</p>
        <p class="card-text">Type: ${Type}</p>
        <p class="card-text">Website: ${Website}</p>
        <p class="card-text">Write: ${Write}</p>
        <p class="card-text">imdbRating: ${imdbRating}</p>
        <p class="card-text">imdbVotes: ${imdbVotes}</p>
        
      </div>
    </div>`;
                }
              });
          }
        }
      }
    });
}

textInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    getInputValue();
  }
});

//fetch movieAPI
function getInputValue() {
  // Selecting the input element and get its value
  var inputVal = document.getElementById("movie").value;
  fetchMovie(inputVal);
}
