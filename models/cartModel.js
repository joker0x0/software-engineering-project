const mongoose = require("mongoose")


const cartSchema = new Schema({
    userId: {
        type: String,
        ref: "User",
        unique: [true, "Only one cart ber each user"]
    },
    products: [{
        productId: {
            type: String,
            ref: "product"
        },
        quantity: {
            type: Number,
            default: 1
        },
    }]
}, {

    timestamps: true,
})

const cartModel = mongoose.model('cart', cartSchema)
module.exports=cartModel