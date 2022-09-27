// API //

// https://www.omdbapi.com/?apikey=d10f6546&s=star%20wars

async function main() {
  const films = await fetch(
    "https://www.omdbapi.com/?apikey=d10f6546&s=star%20wars"
  );
  const filmDatas = await films.json();
  const filmList = document.querySelector(".user-list");
  filmList.innerHTML = filmDatas.map((user) => userHTML(user)).join("");
}

main();

function userHTML(user) {
  return `<div class="movies">
  <figure class="movie__poster">
    <img src="${user.Poster}" alt="">
  </figure>
  <div class="movie__title">
    <h3>${user.Title}</h3>
  </div>
  <div class="movie__year">
      <p>${user.Year}</p>
    </div>
  </div>`;
}

