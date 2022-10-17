const express = require('express');
const {validationReport, validationPegawai} = require('../../middlewares/validation');
const {get, save } = require('./reportController');


const reportRoute = express.Router()

reportRoute.get('/report', validationReport, get)
reportRoute.post('/pegawai', validationPegawai, save)


module.exports = reportRoute