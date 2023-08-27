const movieContainer = document.getElementById("movieContainer");

var getMovies = (function getMovieFromQueryParam() {
  var params = new URLSearchParams(window.location.search);
  const movie = JSON.parse(params.get("movie"));
  showMovie(movie);
})();

function showMovie(movie) {
  const loremIpsum =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ";
  console.log(movie);
  movieContainer.innerHTML = "";

  const { imdbID, Year, Title, Poster } = movie;

  const photoDiv = document.createElement("div");
  photoDiv.setAttribute("id", "photoDivID");
  photoDiv.innerHTML = `
    <img src=${Poster} alt='image' id=${imdbID} />
  `;
  const details = document.createElement("div");
  details.setAttribute("id", "detailsID");
  details.innerHTML = `
    <h1>${Title}</h1>
    <h3>Released in ${Year}</h3>
    <p>${loremIpsum}</p>

  `;
  movieContainer.append(photoDiv);
  movieContainer.append(details);
}
