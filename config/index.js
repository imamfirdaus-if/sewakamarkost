const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  serviceName: process.env.SERVICE_NAME,
  customerService: process.env.CUSTOMER_SERVICE_URL,
  employeeService: process.env.EMPLOYEE_SERVICE_URL,
  objectService: process.env.OBJECT_SERVICE_URL,
  orderService: process.env.ORDER_SERVICE_URL,
};
