const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    profile:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        maxLength:5000
    },
    img:{ 
        type:String,
        required:true

    },
    created_at:
    {
        type:Date,
        required:true
    }

  });

  const Oper = mongoose.model('Oper', dataSchema);

  module.exports=Oper;