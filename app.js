const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
//const bcrypt = require('bcrypt');
//const { sequelize, User } = require('./models');

const beersRoutes = require('./routes/beersRoutes');
const breweriesRoutes = require('./routes/breweriesRoutes');
const imagesRoutes = require('./routes/imagesRoutes');
const usersRoutes = require('./routes/usersRoutes');

const { sequelize } = require('./models');
const User = require('./models/user')(sequelize);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(session({
  secret: 'jfk',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/beers', beersRoutes);
app.use('/api/breweries', breweriesRoutes);
app.use('/api/images', imagesRoutes);
app.use('/api/users', usersRoutes);

passport.use(new LocalStrategy(
  async function (username, password, done) {
    try {
      const user = await User.findOne({ where: { username: username } });
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (password !== user.password) {
        //if (!await bcrypt.compare(password, user.password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
      done(error, null);
    });
});

const port = process.env.PORT || 3000;

User.sync().then(() => {
  console.log('User table created');
});

sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
