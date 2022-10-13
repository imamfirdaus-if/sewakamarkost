const mongoose = require('mongoose');

mongoose.model('Object', {
  namaKost: {
    type: String,
    require: true,
  },
  hargaSewa: {
    type: Number,
    require: true,
  },
  tipeKost: {
    type: String,
    require: true,
  },
});
