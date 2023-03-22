const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const obrasSchema = new Schema(
  {
    title: {type: String, required: true},
    artist: {type: String, required: true},
    year: {type: Number, required: true},
    movement:{type: String, required: true},
    medium: {type: String, required: true},
    dimensions:{type: Object, required: true}, // revisar el objeto de dimension
    location: {type: String, required: false}, // cambiar en el futuro a true
  },
    {
      timestamps: true,
    }
  )
  
  
  const Obras = mongoose.model('obras', obrasSchema);
  
  module.exports = Obras;