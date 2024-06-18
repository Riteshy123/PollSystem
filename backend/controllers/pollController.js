const Poll = require('../models/Poll');
const User = require('../models/User');

exports.createPoll = async (req, res) => {
  if (req.user.role !== 'Institute') return res.status(403).send('Access Denied');

  const { question, options, targetRole } = req.body;
  const poll = new Poll({
    question,
    options,
    createdBy: req.user._id,
    targetRole
  });
  await poll.save();
  res.send('Poll created');
};

exports.getPolls = async (req, res) => {
  const polls = await Poll.find({ targetRole: req.user.role });
  res.send(polls);
};
