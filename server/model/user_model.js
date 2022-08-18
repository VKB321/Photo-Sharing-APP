const mongoose = require('mongoose');
const itemSchema =new mongoose.Schema({
    author:String,
    location: String,
    description:String,
    date:String,
    likes:Number,
    image:String
})
const Item = mongoose.model('userinfos',itemSchema);

module.exports = Item;
