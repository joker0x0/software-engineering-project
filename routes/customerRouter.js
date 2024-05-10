const { EditCart } = require('../controllers/customerController');
const {trackOrder , commitPayment} = require('../product/{id}');
const router = require("express").Router();


router.patch("/product/cart/{id}" , EditCart);
router.get("/user/orders",trackOrder)
router.post("/cart/pay" , commitPayment);
router.get("/products",searchProducts);
router.get("/products",browseProducts);
router.get("/products/{id}",viewProduct);


module.exports = router