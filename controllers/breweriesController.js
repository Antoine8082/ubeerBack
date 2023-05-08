const { Brewery, Beer } = require('../models');
const db = require('../models');



exports.getBreweries = async (req, res) => {
  try {
    const breweries = await db.Brewery.findAll({
      include: [
        {
          model: db.Beer,
          as: 'beers'
        },
      ],
    });
    res.status(200).json(breweries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching breweries', error: error.message });
  }
};


exports.getBreweryById = async (req, res) => {
  try {
    const brewery = await db.Brewery.findByPk(req.params.id, {
      include: [
        {
          model: db.Beer,
          as: 'beers'
        },
      ],
    });

    if (brewery) {
      res.status(200).json(brewery);
    } else {
      res.status(404).json({ message: 'Brewery not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching brewery', error: error.message });
  }
};


exports.createBrewery = async (req, res) => {
  try {
    const newBrewery = await db.Brewery.create(req.body);
    res.status(201).json(newBrewery);
  } catch (error) {
    res.status(500).json({ message: 'Error creating brewery', error: error.message });
  }
};


exports.updateBrewery = async (req, res) => {
  try {
    const updatedBrewery = await db.Brewery.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updatedBrewery[0] === 1) {
      res.status(200).json({ message: 'Brewery updated' });
    } else {
      res.status(404).json({ message: 'Brewery not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating brewery', error: error.message });
  }
};


exports.deleteBrewery = async (req, res) => {
  try {
    const deletedBrewery = await db.Brewery.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (deletedBrewery === 1) {
      res.status(200).json({ message: 'Brewery deleted' });
    } else {
      res.status(404).json({ message: 'Brewery not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting brewery', error: error.message });
  }
};
