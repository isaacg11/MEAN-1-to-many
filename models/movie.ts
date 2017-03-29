import mongoose = require('mongoose');

let MovieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  owner_id: String
});

export default mongoose.model('Movie', MovieSchema);
