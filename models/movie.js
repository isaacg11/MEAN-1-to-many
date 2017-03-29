"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var MovieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    owner_id: String
});
exports.default = mongoose.model('Movie', MovieSchema);
