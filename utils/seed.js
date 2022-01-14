const connection = require("../config/connection");
const { User, Thought } = require("../models");
const {
  usernames,
  // getRandomUsername,
  // getRandomReactions,
  // getRandomThoughts,
} = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("...connected!");

  await User.deleteMany({});

  // await Thought.deleteMany({});

  const thoughts = [];
  const friends = [];

  const userData = [];

  // const reactions = getRandomReactions(20);

  // for (let i = 0; i < 20; i++) {
  //   const thoughtText = getRandomThoughts();
  //   const username = getRandomUsername();
  //   thoughts.push({
  //     thoughtText,
  //     username,
  //     reactions,
  //   });
  // }

  for (let i = 0; i < 20; i++) {
    const username = usernames[i];
    const email = `${username}${Math.floor(
      Math.random() * (99 - 18 + 1) + 18
    )}@email.com`;

    console.log(username, email);

    userData.push({
      username,
      email,
      thoughts,
      friends,
    });
  }

  await User.collection.insertMany(userData);

  // await Thought.collection.insertMany(thoughts);

  // console.table(Users);
  // console.table(thoughts);

  console.info("Seeding complete! 🌱");
  process.exit(0);
});
