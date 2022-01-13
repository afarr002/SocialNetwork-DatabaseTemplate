const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) =>
  res.send(`Ooops, no friends here!
Unknown route`)
);

module.exports = router;
