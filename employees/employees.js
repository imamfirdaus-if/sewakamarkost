//load express
    const express = require("express");
    const app = express();
    const bodyParser = require("body-parser");

    app.use(bodyParser.json());
//load mongoose
    const mongoose = require("mongoose");

    // Load Environment
    require("dotenv").config()

    require("./Employee")
    const Employee = mongoose.model("Employee")
    //connect
    mongoose.connect(process.env.MONGODB_URI, () => {
        console.log("Database is connected!");
    });

app.get('/',(req, res) => {
    res.send("This is main employees service");
})

//create funct
    app.post("/employee", (req, res) => {
        var newEmp = {
            employee_id: req.body.employee_id,
            employee_name: req.body.employee_name,
            employee_birth_date: req.body.employee_birth_date,
            shift: req.body.shift,
            salary: req.body.salary
        }

        //create a new employee
        var employee = new Employee(newEmp)

        employee.save().then(() =>{
            console.log("Pegawai baru ditambahkan!")
        }).catch((err) =>{
            if(err){
                throw err;
            }
        })

        res.send("Menambahkan pegawai sukses!")
    })

    app.get("/employees", (req, res) =>{
        Employee.find().then((employees) =>{
            res.json(employees)
        }).catch(err =>{
            if(err){
                throw err;
            }
        })
    })

    //find funct
    app.get("/employees/:id",(req, res)=>{
        Employee.findById(req.params.id).then((employee)=>{

            if(employee){
                res.json(employee)
            }else{
                res.sendStatus(404);
            }
        }).catch(err =>{
            if(err){
                throw err;
            }
        })
    })

    app.delete("/employees/:id",(req,res) => {
        Employee.findOneAndRemove(req.params.id).then(()=>{
            res.send("Pegawai Berhasil Dihapus!")
        }).catch(err =>{
            if(err){
                throw err;
            }
        })
    })
app.listen(4545, () => {
    console.log("Up and running! -- this is the employees service");
})