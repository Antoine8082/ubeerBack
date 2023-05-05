
const { Image } = require('../models');


exports.getImages = async (req, res) => {
  try {
    const images = await db.Image.findAll();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching images', error: error.message });
  }
};


exports.getImageById = async (req, res) => {
  try {
    const image = await db.Image.findByPk(req.params.id);

    if (image) {
      res.status(200).json(image);
    } else {
      res.status(404).json({ message: 'Image not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching image', error: error.message });
  }
};


exports.createImage = async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ message: 'Image file is required' });
      return;
    }

    const newImage = await db.Image.create({ path: req.file.path });
    res.status(201).json(newImage);
  } catch (error) {
    res.status(500).json({ message: 'Error creating image', error: error.message });
  }
};



exports.updateImage = async (req, res) => {
  try {
    const updatedImage = await db.Image.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updatedImage[0] === 1) {
      res.status(200).json({ message: 'Image updated' });
    } else {
      res.status(404).json({ message: 'Image not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating image', error: error.message });
  }
};


exports.deleteImage = async (req, res) => {
  try {
    const deletedImage = await db.Image.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (deletedImage === 1) {
      res.status(200).json({ message: 'Image deleted' });
    } else {
      res.status(404).json({ message: 'Image not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting image', error: error.message });
  }
};
