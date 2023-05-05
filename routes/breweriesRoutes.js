const express = require('express');
const router = express.Router();
const breweriesController = require('../controllers/breweriesController');

router.get('/', breweriesController.getBreweries);
router.get('/:id', breweriesController.getBreweryById);
router.post('/', breweriesController.createBrewery);
router.put('/:id', breweriesController.updateBrewery);
router.delete('/:id', breweriesController.deleteBrewery);

module.exports = router;
