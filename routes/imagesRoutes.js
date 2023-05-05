const express = require('express');
const router = express.Router();
const imagesController = require('../controllers/imagesController');
const upload = require('../middleware/upload');

router.get('/', imagesController.getImages);
router.get('/:id', imagesController.getImageById);
router.post('/', imagesController.createImage);
router.put('/:id', imagesController.updateImage);
router.delete('/:id', imagesController.deleteImage);

module.exports = router;
