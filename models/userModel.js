const mongoose = require("mongoose")
const productModel = require('./productModel')

const userSchema =new mongoose.Schema({
    name: { 
        type: String, 
        require: true,
        unique: true
    }, 
    password: {
        type: String,
        require: true 
    },
    email:{
        type:String,
        require:true,
        unique: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
      },
      cart: [{
        id: {
            type: String,
        },
        name: {
            type: String
        }
      }],
      orders: [{
        id: {
            type: Number
        },
         status: {
            type: Boolean
         }
      }]

},{timestamps:true})

const userModel = mongoose.model("user", userSchema)
module.exports=userModel