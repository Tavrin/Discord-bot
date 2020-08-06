var mongoose = require("mongoose");


var ShopSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true
    },
    cost: {
        type: Number
    }
});

module.exports = mongoose.model("Shop", ShopSchema);