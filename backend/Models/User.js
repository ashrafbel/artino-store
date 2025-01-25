const mongoose = require("mongoose")

// Use Mongoose's Schema constructor to define the structure of the 'users' collection

const Schema = mongoose.Schema;

// Define the UserSchema to specify the fields and their validation requirements

const UserSchema = ({
    name: {
        type : String,
        required: true,
        unique: true
    },
    email: {
        type : String,
        required: true,
    },
    password: {
        type : String,
        required: true,

    },
})

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel