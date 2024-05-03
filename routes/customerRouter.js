const {trackOrder , commitPayment} = require('../product/{id}');
const router = require("express").Router();

router.patch("/product/cart/{id}" , trackOrder);
router.post("/cart/pay" , commitPayment);

module.exports = router