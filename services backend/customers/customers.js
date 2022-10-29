const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require("./customer");
const Customer = mongoose.model("Customer")

// Load Environment
require("dotenv").config()

mongoose.connect(
  process.env.MONGODB_URI,
  () => {
    console.log("Database berhasil terhubung!");
  }
);

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('This is Customer services ');
});

app.get('/customer', (req, res) => {
  Customer.find()
    .then((customer) => {
      res.json(customer);
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

app.post('/customer', (req, res) => {
  const newCustomer = {
    id_customer: req.body.id_customer,
      nama: req.body.nama,
      telpon: req.body.telpon,
      kota: req.body.kota,
  };

  const customer = new Customer(newCustomer);

  customer
    .save()
    .then(() => {
      console.log('New Customer Created!');
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
  res.send('A new customer created successfully!');
});

app.get('/customer/:id', (req, res) => {
  Customer.findById(req.params.id)
    .then((customer) => {
      if (customer) {
        res.json(customer);
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

app.delete('/customer/:id', (req, res) => {
  Customer.findOneAndRemove(req.params.id)
    .then(() => {
      res.send('Data Kost Deleted Successfully!');
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

app.listen(3000, () => {
  console.log('Customer services are running');
});