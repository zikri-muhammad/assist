const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');
const PORT = process.env.PORT || 3000;

const MONGO_URL = 'mongodb://127.0.0.1:27017/assist';
const server = http.createServer(app)

async function startServer(){
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
 }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
 })
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });  
}

startServer()