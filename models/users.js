const mongoose  = require('mongoose');

const userSchema = mongoose.userSchema({
    name:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    rolle:{
        type: String,
        require: true
    },
    phone:{
        type: String
    }
})