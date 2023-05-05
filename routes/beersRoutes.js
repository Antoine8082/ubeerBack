const express = require('express');
const router = express.Router();
const beersController = require('../controllers/beersController');

router.get('/', beersController.getBeers);
router.get('/:id', beersController.getBeerById);
router.post('/', beersController.createBeer);
router.put('/:id', beersController.updateBeer);
router.delete('/:id', beersController.deleteBeer);

module.exports = router;
