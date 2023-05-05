const express = require('express');
const app = express();
const cors = require('cors');
const { sequelize } = require('./models');

const beersRoutes = require('./routes/beersRoutes');
const breweriesRoutes = require('./routes/breweriesRoutes');
const imagesRoutes = require('./routes/imagesRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/beers', beersRoutes);
app.use('/api/breweries', breweriesRoutes);
app.use('/api/images', imagesRoutes);

const port = process.env.PORT || 3000;
sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
