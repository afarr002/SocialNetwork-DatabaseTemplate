const { connect, connection } = require("mongoose");
require("dotenv").config();

const connectionString =
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/social-network-templateDB";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
