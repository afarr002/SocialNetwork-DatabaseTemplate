const router = require("express").Router();
const { getSingleUser } = require("../../controllers/userController");

// /api/users
router.route("/").get(User.find()).post(getSingleUser);

module.exports = router;
