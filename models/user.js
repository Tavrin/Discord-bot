var mongoose = require("mongoose");


var UserSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    avatar: {
        type: String
    },
    username: {
        type: String
    },
    balance: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("User", UserSchema);