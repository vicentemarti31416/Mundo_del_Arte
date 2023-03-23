const express = require('express');
const dotenv = require('dotenv').config();
const {connect} = require('./src/utils/database');
const routerMuseo = require('./src/api/museos/museos.routers');
const routerObras = require('./src/api/obras/obras.routers');
const routerUser = require('./src/api/users/users.routers');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/museos', routerMuseo);
app.use('/obras', routerObras);
app.use('/user', routerUser);

connect();
app.listen (PORT, () => console.log(`listening on: http://localhost:${PORT}`));

