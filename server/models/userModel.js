const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require:true
    },
    email: {
        type: String,
        trim: true,
        require:true
    },
    email: {
        type: String,
        trim: true,
        require:true
    },
    pic: {
        type: "String",
        required: true,
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      },
}, {
    timestamps: true
});

const User = mongoose.model("User", userModel);

module.exports = User;