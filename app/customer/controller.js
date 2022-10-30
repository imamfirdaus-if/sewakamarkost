const axios = require('axios');
require('dotenv').config();
module.exports = {
  index: async (req, res) => {
    try {
      axios
        .get('http://localhost:' + process.env.CUSTOMER_PORT + '/customer')
        .then((response) => {
          const customer = response.data;
          req.res.render('pages/customer/view_customer', {
            customer,
            title: 'Halaman customer',
            name: 'john',
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  },
  viewCreate: async (req, res) => {
    try {
      res.render('pages/customer/create', {
        name: 'john',
        title: 'Halaman Tambah Customer',
      });
    } catch (err) {
      console.log(err);
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { nama, telpon, kota } = req.body;

      axios
        .post('http://localhost:' + process.env.CUSTOMER_PORT + '/customer', {
          nama,
          telpon,
          kota,
        })
        .then((response) => {
          const customer = response.data;
          res.redirect('/customer');
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;

      axios
        .post(
          'http://localhost:' + process.env.CUSTOMER_PORT_ + '/customer/' + id,
          {
            _id: id,
          }
        )
        .then((response) => {
          const customer = response.data;
          res.redirect('/pages/customer/view_customer');
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  },
};
