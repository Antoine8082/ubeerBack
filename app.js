const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
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

app.use('/api/beers', beersRoutes);
app.use('/api/breweries', breweriesRoutes);
app.use('/api/images', imagesRoutes);
app.use('/api/users', usersRoutes);


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
