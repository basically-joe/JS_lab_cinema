const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.findFilmTitles = function (films) {
  const findTitle = [];

  this.films.forEach((film) => {
    findTitle.push(film.title);
  });
  return findTitle;
};

Cinema.prototype.findFilmByTitle = function (title) {

const foundTitle = this.films.find((film) => {
  return film.title === title;
})
return foundTitle;

};


module.exports = Cinema;
