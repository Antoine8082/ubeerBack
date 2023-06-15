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

exports.login = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
})

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/login');
}
