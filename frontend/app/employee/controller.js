const axios = require('axios');
require('dotenv').config();
module.exports = {
  index: async (req, res) => {
    try {
      axios
        .get('http://localhost:' + process.env.EMPLOYEE_PORT + '/employees')
        .then((response) => {
          const employee = response.data;
          req.res.render('pages/employee/view_employee', {
            employee,
            title: 'Halaman Employee',
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
      res.render('pages/employee/create', {
        name: 'john',
        title: 'Halaman Tambah Employee',
      });
    } catch (err) {
      console.log(err);
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { employee_id, employee_name, employee_birthdate, shift, salary } =
        req.body;

      axios
        .post('http://localhost:' + process.env.EMPLOYEE_PORT + '/employee', {
          employee_id,
          employee_name,
          employee_birthdate,
          shift,
          salary,
        })
        .then((response) => {
          const employee = response.data;
          res.redirect('/employee');
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
        .post('http://localhost:' + process.env.EMPLOYEE_PORT + '/employees/', {
          _id: id,
        })
        .then((response) => {
          const employee = response.data;
          res.redirect('/pages/employee/view_employee');
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  },
};
