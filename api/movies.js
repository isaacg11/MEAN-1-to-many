"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var movie_1 = require("../models/movie");
router.post('/', function (req, res, next) {
    if (req.body.id === undefined) {
        var new_movie = new movie_1.default({
            title: req.body.title,
            genre: req.body.genre,
            owner_id: req.body.owner_id
        });
        new_movie.save(function (err, res) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(res);
            }
        });
    }
    else {
        movie_1.default.findByIdAndUpdate(req.body.id, { $set: { title: req.body.title, genre: req.body.genre } }, function (err, movie) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(movie);
            }
        });
    }
    res.sendStatus(200);
});
router.get('/:id', function (req, res, next) {
    movie_1.default.find({ owner_id: req.params['id'] }).then(function (movies) {
        res.json(movies);
    });
});
router.delete('/:id', function (req, res, next) {
    var id = req.params['id'];
    movie_1.default.findByIdAndUpdate(id, { $set: { date_deleted: new Date() } }, function (err, res) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(res);
        }
    });
    res.sendStatus(200);
});
exports.default = router;
