const mongoose = require("mongoose");

mongoose.model("Employee", {
    employee_name:{
        type: String,
        require: true
    },
    employee_birth_date:{
        type:Date,
        require: true
    },
    shift:{
        type: String,
        require: true
    },
    salary:{
        type:Number,
        require: true
    }
});