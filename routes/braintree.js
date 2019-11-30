const express = require("express");
const router = express.Router();

const { requireSignin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { generateToken, processPayment } = require("../controllers/braintree");

router.get("/braintree/getToken/:userId", requireSignin, isAuth, generateToken);
router.post(
    "/braintree/payment/:userId",
    requireSignin,
    isAuth,
    processPayment
);

router.param("userId", userById);

const getToken = (userId, token) => {
    getBraintreeClientToken(userId, token).then(data => {
        if (data.error) {
            console.log(data.error);
            setData({ ...data, error: data.error });
        } else {
            console.log(data); // make sure you get data
            setData({ clientToken: data.clientToken });
        }
    });
};

useEffect(() => {
    getToken(userId, token);
}, []);

module.exports = router;
