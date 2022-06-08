let mainDiv = document.getElementById("app");
let textInput = document.getElementById("movie")
let button = document.getElementById("go");
let newPEl = document.createElement("p");




function fetchMovie(movie) {
  // console.log('movie:',movie)
  mainDiv.textContent = "";
  let requestUrl = `https://www.omdbapi.com/?apikey=5385144e&t=${movie}&plot=full`;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let posterImg = document.createElement("img");
      posterImg.src = data.Poster;
      mainDiv.appendChild(posterImg);
      mainDiv.appendChild(newPEl);

      //Initial Ratings returned in Array
      let ratingsArr = data.Ratings;
    
      //console.log("ratingsArr", ratingsArr);
      ratingsArr.forEach((rating) => {
        console.log("inside raitings", rating);
        newPEl.textContent += `${rating.Source}:${rating.Value} `;
        mainDiv.appendChild(newPEl);
        // newPEl.appendChild(breakEl)
      });

      //deleting data arrays within arrays to later 
      delete data.Ratings;
      delete data.Poster;
      delete data.imdbID;
      for (const property in data) {
        let newEl = document.createElement("p");
        let movieInfo = `${property}: ${data[property]}`;
        newEl.textContent = movieInfo;
        mainDiv.appendChild(newEl);
      }
    });
}

textInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    getInputValue()
  }
});

//fetch movieAPI
function getInputValue() {
  // Selecting the input element and get its value
  var inputVal = document.getElementById("movie").value;
  fetchMovie(inputVal);
}
