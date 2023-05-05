const { Beer, Brewery } = require('../models');


exports.getBeers = async (req, res) => {
  try {
    const beers = await Beer.findAll({
      include: [
        {
          model: Brewery,
          as: 'brewery'
        },
      ],
    });
    res.status(200).json(beers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching beers', error });
  }
};


exports.getBeerById = async (req, res) => {
  try {
    const beer = await Beer.findByPk(req.params.id, {
      include: [
        {
          model: Brewery,
          as: 'brewery'
        },
      ],
    });

    if (beer) {
      res.status(200).json(beer);
    } else {
      res.status(404).json({ message: 'Beer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching beer', error });
  }
};


exports.createBeer = async (req, res) => {
  try {
    const newBeer = await Beer.create(req.body);
    res.status(201).json(newBeer);
  } catch (error) {
    res.status(500).json({ message: 'Error creating beer', error });
  }
};


exports.updateBeer = async (req, res) => {
  try {
    const updatedBeer = await Beer.update(req.body, {
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
    res.status(500).json({ message: 'Error updating beer', error });
  }
};


exports.deleteBeer = async (req, res) => {
  try {
    const deletedBeer = await Beer.destroy({
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
    res.status(500).json({ message: 'Error deleting beer', error });
  }
};
