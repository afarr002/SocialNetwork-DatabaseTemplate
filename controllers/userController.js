const { User, Thought } = require("../models");

module.exports = {
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .lean()
      .then(async (user) =>
        !user
          ? res.status(404).json({
              message: `Oops!
    No users here with that ID`,
            })
          : res.json({
              user,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  deleteUser(req, res) {
    User.findOneAndRemove({ _id: res.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: `Oops!
    No user found!`,
            })
          : Thought.findOneAndUpdate(
              {
                users: req.params.userId,
              },
              {
                $pull: {
                  users: req.params.userId,
                },
              },
              {
                new: true,
              }
            )
      )
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({
              message: `User deleted, but no thoughts found!`,
            })
          : res.json({ messgae: `User successfully deleted` })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
