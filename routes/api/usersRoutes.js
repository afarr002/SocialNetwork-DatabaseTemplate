const router = require("express").Router();
const {
  getSingleUser,
  createUser,
  deleteUser,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(User.find()).post(createUser);

router.route("/:userId").get(getSingleUser).delete(deleteUser);

module.exports = router;
