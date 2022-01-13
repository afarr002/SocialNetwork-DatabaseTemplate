const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomUsername, getRandomReactions } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("...connected!");

  await User.deleteMany({});

  await Thought.deleteMany({});

  const thoughts = [];
  const friends = [];

  const reactions = getRandomReactions(20);

  for (let i = 0; i < 20; i++) {
    const username = getRandomUsername();
    const email = `${username}${Math.floor(
      Math.random() * (99 - 18 + 1) + 18
    )}@email.com`;

    users.push({
      username,
      email,
      thoughts,
      friends,
    });
  }

  for (let i = 0; i < 20; i++) {
    const thoughtText = getRandomThought();
    const username = getRandomUsername();
    thoughts.push({
      thoughtText,
      username,
      reactions,
    });
  }

  await User.collection.insertMany(users);

  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);

  console.info("Seeding complete! 🌱");
  process.exit(0);
});
