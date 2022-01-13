const router = require("express").Router();
const { getThoughts } = require("../../controllers/thoughtController");

router.route("/").get(getThoughts);

router.route(":thoughtId/reactions");
