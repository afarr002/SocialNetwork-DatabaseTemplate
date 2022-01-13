const { Thought, User, Reaction } = require("../models");

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({
              message: `Hmmmm, curious.
      No thought with that ID was found!`,
            })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({
              messgae: `Hmmm, I wonder.
              There doesn't seem to be any thought associated with that ID!`,
            })
          : Reaction.deleteMany({
              _id: {
                $in: thought.reactions,
              },
            })
      )
      .then(() =>
        res.json({
          message: `Thoughts and reactions deleted!`,
        })
      )
      .catch((err) => res.s);
  },
};
