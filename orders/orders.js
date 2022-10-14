const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

require("dotenv").config()

require("./Order")
const Order = mongoose.model("Order")

app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true
    })
    .then(() => console.log("Database connected - Orders"))
    .catch(err => console.error(err));

app.get('/',(req, res) => {
    res.send("This is main orders service!");
})

app.post("/order", (req, res) => {

    var newOrder = {
        // EmployeeID: mongoose.Types.ObjectId(req.body.EmployeeID),
        // CustomerID: mongoose.Types.ObjectId(req.body.CustomerID),
        // ObjectID: mongoose.Types.ObjectId(req.body.ObjectID),
        employeeID: req.body.employeeID,
        customerID: req.body.customerID,
        objectID: req.body.objectID,
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


app.listen(process.env.PORT, () => {
    console.log("Orders Service's Running!")
})