import express = require('express');
let router = express.Router();
import Movie from '../models/movie';

/* CREATE or UPDATE movies */
router.post('/', function(req, res, next) {

  if(req.body.id === undefined){
    let new_movie = new Movie({
      title: req.body.title,
      genre: req.body.genre,
      owner_id: req.body.owner_id
    });
    new_movie.save(function (err, res) {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    })
  }
  else{
    Movie.findByIdAndUpdate(req.body.id, { $set: { title: req.body.title, genre: req.body.genre}}, function (err, movie) {
      if (err) {
        console.log(err);
      } else {
        console.log(movie);
      }
    });
  }
  res.sendStatus(200);
});

/* GET movies */
router.get('/:id', function(req, res, next) {
  Movie.find({owner_id: req.params['id']}).then(function(movies){
    res.json(movies);
  })
});

/* DELETE movie */
router.delete('/:id', function(req, res, next) {
  let id = req.params['id'];
  Movie.findByIdAndUpdate(id, { $set: { date_deleted: new Date()}}, function (err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
  res.sendStatus(200);
});

export default router;
