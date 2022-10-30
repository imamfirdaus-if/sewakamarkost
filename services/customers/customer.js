const mongoose = require("mongoose");

mongoose.model("Customer", {
    id_customer:{
        type: Number,
        require: true
    },
    nama:{
        type: String,
        require: true
    },
    telpon:{
        type: Number,
        require: true
    },
    kota:{
        type: String,
        require: true
    },
});
