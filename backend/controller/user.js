const User = require("../model/users");
const bcrypt = require('bcrypt');

function isstringinvalid(string) {
  return string === undefined || string.length === 0;
}

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log('email', email);

    if (isstringinvalid(name) || isstringinvalid(email) || isstringinvalid(password)) {
      return res.status(400).json({ err: "Bad parameters. Something is missing" });
    }

    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        throw new Error('Something went wrong');
      }

      await User.create({ name, email, password: hash });
      res.status(201).json({ message: 'Successfully create new user' });
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (isstringinvalid(email) || isstringinvalid(password)) {
      return res.status(400).json({ message: 'Email or password is missing', success: false });
    }

    const user = await User.findAll({ where: { email } });

    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (err) {
          throw new Error('Something went wrong');
        }

        if (result === true) {
          res.status(200).json({ success: true, message: 'User logged in successfully' });
        } else {
          res.status(400).json({ success: false, message: 'Password is incorrect' });
        }
      });
    } else {
      res.status(404).json({ success: false, message: 'User does not exist' });
    }
  } catch (err) {
    res.status(500).json({ message: err, success: false });
  }
}

module.exports = {
  signup,
  login
};
