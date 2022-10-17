const express = require('express');
const { validationAbsen } = require('../../middlewares/validation');

const {getAllAbsen, createAbsen, getAbsenById, updateAbsen, deleteAbsen} = require('./absenController');

const absenRouter = express.Router()

absenRouter.get('/absen', getAllAbsen)
absenRouter.get('/absen/:absenId', getAbsenById)
absenRouter.post('/absen', validationAbsen, createAbsen)
absenRouter.patch('/absen/:absenId', validationAbsen, updateAbsen)
absenRouter.delete('/absen/:absenId', deleteAbsen)



module.exports = absenRouter