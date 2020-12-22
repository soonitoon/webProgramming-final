const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    nickname: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    title: String,
    text: String
},{
    timestamps: {createdAt: 'joindAt'}
});

module.exports = mongoose.model('Text', schema);
