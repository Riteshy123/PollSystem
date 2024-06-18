const User = require('../models/User');

exports.getUser = async (req, res) => {
  const user = await User.findById(req.user._id);
  res.send(user);
};

exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(user);
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send('User deleted');
};
