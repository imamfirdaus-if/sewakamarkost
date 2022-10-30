const mongoose = require("mongoose");

function oneMonthFromNow() {
    var d = new Date();
    var targetMonth = d.getMonth() + 1;
    d.setMonth(targetMonth);
    if(d.getMonth() !== targetMonth % 12) {
        d.setDate(0); // last day of previous month
    }
    return d;
}

mongoose.model("Order", {
    employeeID: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },
    customerID: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },
    objectID: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },
    // employeeID: {
    //     type: String,
    //     require: true
    // },
    // customerID: {
    //     type: String,
    //     require: true
    // },
    // objectID: {
    //     type: String,
    //     require: true
    // },
    orderCode: {
        type: String,
        require: true
    },
    startAt: {
        type : Date, 
        default: Date.now
    }, 
    endAt: {
        type: Date,
        default: oneMonthFromNow
    }
})