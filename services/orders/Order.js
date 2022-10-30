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
    // EmployeeID: {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     require: true
    // },
    // CustomerID: {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     require: true
    // },
    EmployeeID: {
        type: String,
        require: true
    },
    CustomerID: {
        type: String,
        require: true
    },
    orderCode: {
        type: String,
        require: true
    },
    namaKost: {
        type: String,
        require: true
    },
    tipeKost: {
        type: String,
        require: true
    },
    lamaSewa: {
        type: String,
        require: true
    },
    price: {
        type: Number,
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