const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');

// GET login-signup page

router.get('/loginsignup', (req, res) => {
  res.render('loginSignUp');
});

// POST signup
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ username, email, password: hashedPassword });
  res.redirect('/login-signup');
});

// POST login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && await bcrypt.compare(password, user.password)) {
    req.session.user = user;
    res.redirect('/main.html');
  } else {
    res.send('Invalid credentials');
  }
});

// GET profile
router.get('/profile', (req, res) => {
  if (!req.session.user) return res.redirect('/loginsignup');
  res.render('profile', { user: req.session.user });
});

module.exports = router; 