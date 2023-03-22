const express = require("express");

const router = express.Router();

const {
  getMuseos,
  postMuseos,
  putMuseos,
  deleteMuseos,
} = require("./museos.controllers");

router.get("/", getMuseos);
router.post("/", postMuseos);
router.put("/:id", putMuseos);
router.delete("/:id", deleteMuseos);

module.exports = router;
