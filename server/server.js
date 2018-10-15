// server.js

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 4200;
const cors = require('cors');

const config = require('./database/DB');
const ServerPortRouter = require('./routes/ServerPortRoutes');

mongoose.connect(config.DB).then(
  () => {
    console.log('Database is connected')
  },
  err => {
    console.log('Can not connect to the database' + err)
  });

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());zzz

app.use('/serverport', ServerPortRouter);


app.listen(PORT, function() {
  console.log('Server is running on Port: ', PORT);
});
