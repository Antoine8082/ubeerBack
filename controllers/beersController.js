// const { Beer } = require('../models');
// const { Brewery } = require('../models');
const db = require('../models');


exports.getBeers = async (req, res) => {
  try {
    const beers = await db.Beer.findAll({
      include: [
        {
          model: db.Brewery,
          as: 'brewery'
        },
      ],
    });
    res.status(200).json(beers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching beers', error: error.message });
  }
};


exports.getBeerById = async (req, res) => {
  try {
    const beer = await db.Beer.findByPk(req.params.id, {
      include: [
        {
          model: db.Brewery,
          as: 'brewery'
        },
        {
          model: db.Image,
          as: 'beerImage'
        },
      ],
    });

    if (beer) {
      res.status(200).json(beer);
    } else {
      res.status(404).json({ message: 'Beer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching beer', error: error.message });
  }
};


exports.createBeer = async (req, res) => {
  try {
    const newBeer = await db.Beer.create(req.body);
    res.status(201).json(newBeer);
  } catch (error) {
    res.status(500).json({ message: 'Error creating beer', error: error.message });
  }
};


exports.updateBeer = async (req, res) => {
  try {
    const updatedBeer = await db.Beer.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updatedBeer[0] === 1) {
      res.status(200).json({ message: 'Beer updated' });
    } else {
      res.status(404).json({ message: 'Beer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating beer', error: error.message });
  }
};


exports.deleteBeer = async (req, res) => {
  try {
    const deletedBeer = await db.Beer.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (deletedBeer === 1) {
      res.status(200).json({ message: 'Beer deleted' });
    } else {
      res.status(404).json({ message: 'Beer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting beer', error: error.message });
  }
};
