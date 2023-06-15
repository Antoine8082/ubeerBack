//const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models');

exports.register = async (req, res, next) => {
  try {
    //const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      username: req.body.username,
      password: req.body.password,
      //password: hashedPassword,
    });
    res.redirect('/login');
  } catch {
    res.redirect('/register');
  }
}

exports.login = async (req, res, next) => {
  const user = await User.findOne({ where: { username: req.body.username } });
  if (user == null) {
    return res.status(400).send('Cannot find user');
  }
  try {
    if(user.password == req.body.password) {
      res.send(user);
    }
    else {
      res.send('Not Allowed');
    }
  } catch {
    res.status(500).send();
  }
}

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/login');
}
