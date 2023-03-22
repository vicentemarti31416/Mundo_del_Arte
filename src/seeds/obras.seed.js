const mongoose = require('mongoose');
const Obras = require('../api/obras/obras.models');
const dotenv = require('dotenv').config();
const DB_URL = process.env.DB_URL;


const obras = [
  {
    title: 'Las Meninas',
    artist: 'Diego Velázquez',
    year: 1656,
    movement: "Baroque",
    medium: 'Oil on canvas',
    dimensions: {
        width: 320,
        height: 276
    },
    location: '',
  },
  {
    title: 'Saturno devorando a su hijo',
    artist: 'Francisco de Goya',
    year: 1823,
    movement: "Romanticism",
    medium: 'Oil on plaster transferred to canvas',
    dimensions: {
        width: 143,
        height: 81
    },
    location: '',
  },
  {
    title: "El Jardín de las Delicias",
    artist: "Hieronymus Bosch",
    year: 1510,
    movement: "Northern Renaissance",
    medium: "Oil on panel",
    dimensions: {
        width: 220,
        height: 389
    },
    location: '',
  },
  {
    title: "Ritmo de otoño (número 30)",
    artist: "Jackson Pollock",
    year: 1950,
    movement: "Abstract Expressionism",
    medium: "Oil on canvas",
    dimensions: {
        width: 266,
        height: 525
    },
    location: '',
  },
  {
    title: "Autorretrato con sombrero de paja",
    artist: "Vincent van Gogh",
    year: 1887,
    movement: "Post-Impressionism",
    medium: "Oil on canvas",
    dimensions: {
        width: 40,
        height: 31
    },
    location: '',
  },
  {
    title: "Retrato de Juan de Pareja",
    artist: "Diego Velázquez",
    year: 1650,
    movement: "Baroque",
    medium: "Oil on canvas",
    dimensions: {
        width: 81,
        height: 69
    },
    location: '',
  },
  {
    title: "La Gioconda",
    artist: "Leonardo da Vinci",
    year: 1506,
    movement: "Italian Renaissance",
    medium: "Oil on poplar panel",
    dimensions: {
        width: 77,
        height: 53
    },
    location: '',
  },
  {
    title: "La Libertad guiando al pueblo",
    artist: "Eugène Delacroix",
    year: 1830,
    movement: "Romanticism",
    medium: "Oil on canvas",
    dimensions: {
        width: 260,
        height: 325
    },
    location: '',
  },
  {
    title: "La balsa de la Medusa",
    artist: "Théodore Géricault",
    year: 1819,
    movement: "Romanticism",
    medium: "Oil on canvas",
    dimensions: {
        width: 491,
        height: 716
    },
    location: '',
  },
  {
    title: "Guernica",
    artist: "Pablo Picasso",
    year: 1937,
    movement: "Cubism",
    medium: "Oil on canvas",
    dimensions: {
        width: 349,
        height: 776
    },
    location: '',
  },
  {
    title: "Un mundo",
    artist: "Ángeles Santos",
    year: 1929,
    movement: "Surrealism",
    medium: "Oil on canvas",
    dimensions: {
        width: 61,
        height: 46
    },
    location: '',
  },
  {
    title: "El Gran Masturbador",
    artist: "Salvador Dalí",
    year: 1929,
    movement: "Surrealism",
    medium: "Oil on canvas",
    dimensions: {
        width: 110,
        height: 150
    },
    location: '',
  }

  ];


mongoose.set("strictQuery",true);

mongoose
  .connect(DB_URL)
  .then(async () => {
    const obras = await Obras.find();
    if (obras.length > 0) {
      await Obras.collection.drop(); 
      console.log("Obra eliminados");
    }
  })
  .catch((error) => console.log("Ha habido un error para crear una Obra", error))
  .then(async () => {
    await Obras.insertMany(obras);
    console.log("Obra añadidos");
  })
  .finally(() => mongoose.disconnect());