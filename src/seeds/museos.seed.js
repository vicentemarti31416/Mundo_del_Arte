const mongoose = require('mongoose');
const Museo = require('../api/museos/museos.models');
const dotenv = require('dotenv').config();
const DB_URL = process.env.DB_URL;


const museos = [
    {
      name: "Museo del Prado",
      location: "Madrid, España",
      works: [],
      foundation: 1819,
    },
    {
      name: "Museo Metropolitano de Arte",
      location: "Nueva York, Estados Unidos",
      works: [],
      foundation: 1870,
    },
    {
      name: "Museo del Louvre",
      location: "París, Francia",
      works: [],
      foundation: 1793,
    },
    {
      name: "Museo Nacional Centro de Arte Reina Sofía",
      location: "Madrid, España",
      works: [],
      foundation: 1992,
    },
  ];


mongoose.set("strictQuery",true);

mongoose
  .connect(DB_URL)
  .then(async () => {
    const museos = await Museo.find();
    if (museos.length > 0) {
      await Museo.collection.drop(); 
      console.log("Museo eliminados");
    }
  })
  .catch((error) => console.log("Ha habido un error para crear un museo", error))
  .then(async () => {
    await Museo.insertMany(museos);
    console.log("Museo añadidos");
  })
  .finally(() => mongoose.disconnect());