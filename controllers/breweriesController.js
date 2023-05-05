const { Brewery, Beer } = require('../models');


exports.getBreweries = async (req, res) => {
  try {
    const breweries = await Brewery.findAll({
      include: [
        {
          model: Beer,
          as: 'beers'
        },
      ],
    });
    res.status(200).json(breweries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching breweries', error });
  }
};


exports.getBreweryById = async (req, res) => {
  try {
    const brewery = await Brewery.findByPk(req.params.id, {
      include: [
        {
          model: Beer,
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
    res.status(500).json({ message: 'Error fetching brewery', error });
  }
};


exports.createBrewery = async (req, res) => {
  try {
    const newBrewery = await Brewery.create(req.body);
    res.status(201).json(newBrewery);
  } catch (error) {
    res.status(500).json({ message: 'Error creating brewery', error });
  }
};


exports.updateBrewery = async (req, res) => {
  try {
    const updatedBrewery = await Brewery.update(req.body, {
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
    res.status(500).json({ message: 'Error updating brewery', error });
  }
};


exports.deleteBrewery = async (req, res) => {
  try {
    const deletedBrewery = await Brewery.destroy({
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
    res.status(500).json({ message: 'Error deleting brewery', error });
  }
};
