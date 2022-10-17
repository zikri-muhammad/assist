const express = require('express');
const { update, get } = require('./approveController');


const approveRoute = express.Router()

approveRoute.get('/approve', get)
approveRoute.patch('/approve/:approveId', update)



module.exports = approveRoute