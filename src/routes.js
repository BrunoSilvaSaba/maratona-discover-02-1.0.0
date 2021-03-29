const express = require('express');
const routes = express.Router();
basePath = __dirname + "/views";

routes.get('/index.html', (request, response) => response.sendFile(basePath + "/index.html"))
routes.get('/job.html', (request, response) => response.sendFile(basePath + "/job.html"))
routes.get('/job-edit.html', (request, response) => response.sendFile(basePath + "/job-edit.html"))
routes.get('/profile.html', (request, response) => response.sendFile(basePath + "/profile.html"))


module.exports = routes;