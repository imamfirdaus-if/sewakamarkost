// Load modules
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

// Load Environment
require("dotenv").config()

// Load models
require("./models/Order")
const Order = mongoose.model("Order")

app.use(bodyParser.json())

// Connection to MongoDB Atlas
mongoose.connect(process.env.ORDER_SERVICE_URL, {
        useNewUrlParser: true
    })
    .then(() => console.log("Database connected - Orders"))
    .catch(err => console.error(err));


app.get('/',(req, res) => {
    res.send("This is main orders service!");
})


app.post("/order", (req, res) => {

    var newOrder = {
        employeeID: mongoose.Types.ObjectId(req.body.employeeID),
        customerID: mongoose.Types.ObjectId(req.body.customerID),
        objectID: mongoose.Types.ObjectId(req.body.objectID),
        // employeeID: req.body.employeeID,
        // customerID: req.body.customerID,
        // objectID: req.body.objectID,
        orderCode: req.body.orderCode,
        startAt: req.body.startAt,
        endAt: req.body.endAt
    }

    var order = new Order(newOrder)

    order.save().then(() => {
        res.send("Order created successfully!")
    }).catch((err) => {
        if (err) {
            throw err
        }
    })

})


app.get("/orders", (req, res) =>{
    Order.find().then((orders) =>{
        res.json(orders)
    }).catch(err =>{
        if (err) {
            throw err;
        }
    })
})


app.listen(process.env.ORDER_PORT, () => {
    console.log("Orders Service's Running!")
})