const express = require("express");

const router = express.Router();

const {
  getObras,
  postObras,
  putObras,
  deleteObras,
} = require("./obras.controllers");

router.get("/", getObras);
router.post("/", postObras);
router.put("/:id", putObras);
router.delete("/:id", deleteObras);

module.exports = router;