const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./model/Object');
require('dotenv').config();

const Object = mongoose.model('Object');

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log('MongoDB is Connected!');
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('This is object services ');
});

app.get('/object', (req, res) => {
  Object.find()
    .then((object) => {
      res.json(object);
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

app.post('/object', (req, res) => {
  const newObject = {
    namaKost: req.body.namaKost,
    hargaSewa: req.body.hargaSewa,
    tipeKost: req.body.tipeKost,
  };

  const object = new Object(newObject);

  object
    .save()
    .then(() => {
      console.log('New Object Created!');
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
  res.send('A new object created successfully!');
});

app.get('/object/:id', (req, res) => {
  Object.findById(req.params.id)
    .then((object) => {
      if (object) {
        res.json(object);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

app.delete('/object/:id', (req, res) => {
  Object.findOneAndRemove(req.params.id)
    .then(() => {
      res.send('Data Kost Deleted Successfully!');
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

app.listen(4000, () => {
  console.log('Object services are running');
});
