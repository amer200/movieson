const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    writer: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    tags: {
        type: Array,
    },
    secions: [{
        title: {
            type: String,
            require: true
        },
        img: {
            type: String
        },
        content:{
            type: String
        }
    }]
})

module.exports = mongoose.model('Blog', blogSchema);