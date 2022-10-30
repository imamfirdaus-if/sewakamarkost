const axios = require('axios');
require('dotenv').config();
module.exports = {
  index: async (req, res) => {
    try {
      axios
        .get('http://localhost:' + process.env.OBJECT_PORT + '/object')
        .then((response) => {
          const object = response.data;
          req.res.render('pages/object/view_object', {
            object,
            title: 'Halaman Object',
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
      res.render('pages/object/create', {
        name: 'john',
        title: 'Halaman Tambah Kost',
      });
    } catch (err) {
      console.log(error);
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { namaKost, hargaSewa, tipeKost } = req.body;

      axios
        .post('http://localhost:' + process.env.OBJECT_PORT + '/object', {
          namaKost,
          hargaSewa,
          tipeKost,
        })
        .then((response) => {
          const object = response.data;
          res.redirect('/object');
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(error);
    }
  },
  // actionDelete: async (req, res) => {
  //   try {
  //     const { id } = req.params;

  //     await Category.findOneAndRemove({ _id: id });

  //     req.flash('alertMessage', 'Berhasil Menghapus Category');
  //     req.flash('alertStatus', 'success');

  //     res.redirect('/category');
  //   } catch (err) {
  //     req.flash('alertMessage', `${err.message}`);
  //     req.flash('alertStatus', 'danger');
  //     res.redirect('/category');
  //   }
  // },
};
