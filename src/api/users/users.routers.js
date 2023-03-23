const express = require('express');

const router = express.Router();

const { login, register, checksession } = require('../users/users.controllers');

router.post('/login', login);
router.post('/register', register);
router.post('/checksession', checksession);

module.exports = router;