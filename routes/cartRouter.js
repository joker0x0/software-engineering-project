const{addToCart , deleteFromCart, commitPayment}=require("../controllers/cartController")
const router = require("express").Router()
const { auth ,Roles } = require("../middlewares/authMiddleware");


router.post('/',auth([Roles.User]) ,addToCart)
router.delete('/cart/:productId',auth([Roles.User]),deleteFromCart)
router.post('/cart/pay', auth([Roles.User]), commitPayment)

module.exports = router