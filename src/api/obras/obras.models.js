const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const obrasSchema = new Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    year: { type: Number, required: true },
    movement: { type: String, required: true },
    medium: { type: String, required: true },
    image: {type: String, required: true, default: "https://www.touchtaiwan.com/images/default.jpg"},
    dimensions: { type: Object, required: false }, // revisar el objeto de dimension
    location: { type: String, required: false }, // cambiar en el futuro a true
  },
  {
    timestamps: true,
  }
)


const Obras = mongoose.model('obras', obrasSchema);

module.exports = Obras;