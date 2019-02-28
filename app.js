const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

//passport config
require('./config/passport')(passport);

//Load Routes
const auth = require('./routes/auth');

const app = express();

app.get('/', (req, res) => {
  res.send('It Works!');
});

//Use Routes
app.use('/auth', auth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
