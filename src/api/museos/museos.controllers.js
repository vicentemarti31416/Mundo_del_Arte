const Museo = require("./museos.models");

const getMuseos = async (req, res) => {
try {
    const allMuseos = await Museo.find(); 
    return res.status(200).json(allMuseos);
 } catch (error) {
        return res.status(500).json(error);
      }
};

const postMuseos = async (req, res) => {
    try {
      console.log(req.body);
      const { name, location, works,foundation } = req.body;
      const newMuseos = new Museo({ name, location, works,foundation}); 
  
      const createdMuseos = await newMuseos.save(); 
      return res.status(201).json(createdMuseos);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  const putMuseos = async (req, res) => {
    try {
      const {id} = req.params;
      const putMuseos = new Museo(req.body);
      putMuseos._id = id;
  
      const updateMuseos = await Museo.findByIdAndUpdate(id, putMuseos); 
      if(!updateMuseos) {    
      return res.status(404).json({ message: "Museo not found" });
      } 
      return res.status(200).json(updateMuseos);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  const deleteMuseos = async (req, res) => {
    try {
      const {id} = req.params;
      const deleteMuseos = await Museo.findByIdAndDelete(id); 
      if(!deleteMuseos) {   
      return res.status(404).json({ message: "Museo not found" });
      } 
    } catch (error) {
      return res.status(500).json(error);
    }
  };



  module.exports = {getMuseos, postMuseos, putMuseos, deleteMuseos};