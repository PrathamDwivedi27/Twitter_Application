const mongoose = require('mongoose');

const connect=async ()=>{
    await mongoose.connect('mongodb://localhost/Twitter');

}

module.exports=connect;