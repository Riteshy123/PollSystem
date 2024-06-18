const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

exports.register = async (req, res) => {
  try {
    const { name, email, phone, role, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(400).send('User already exists');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ name, email, phone, role, password: hashedPassword });
    await user.save();
    res.send('User registered');
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(object);
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('Email or password is wrong');

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(400).send('Invalid password');

    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.header('Authorization', token).send(token);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.logout = (req, res) => {
  res.header('Authorization', '').send('Logged out');
};
