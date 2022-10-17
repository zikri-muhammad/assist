const express = require("express");

//route absen
const absenRouter = require('./routes/absen/absenRoute');
const approveRoute = require("./routes/approve/approveRoute");
const reportRoute = require("./routes/report/reportRoute");


const app = express();
app.use(express.json());
app.use(absenRouter);
app.use(approveRoute);
app.use(reportRoute);


module.exports = app;