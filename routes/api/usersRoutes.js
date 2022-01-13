const router = require("express").Router();
const {
  getSingleUser,
  createUser,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(User.find()).post(createUser);

module.exports = router;
