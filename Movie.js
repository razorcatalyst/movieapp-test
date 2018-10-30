const mongoose = require('mongoose');

const db = 'mongodb://admin:admin12345@ds141043.mlab.com:41043/mattmovies';

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.log('Connection error: ', error);
  });

//Title, Year, Genre, Actors, Plot and Poster
const schema = mongoose.Schema({
  title: {
    type: String
  },
  year: {
    type: String
  },
  genre: {
    type: String
  },
  actors: {
    type: String
  },
  plot: {
    type: String
  },
  poster: {
    type: String
  }
});

const Movie = mongoose.model('Movie', schema, 'movieCollection');

module.exports = Movie;
