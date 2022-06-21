const numberOfFilms = prompt('how many films did you watched?', '');
 
// second

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

// third

const lastFilm = prompt('Your last film?', ''),
      levelFilm = prompt('Films level');
personalMovieDB.movies[lastFilm] = levelFilm;

console.log(personalMovieDB);