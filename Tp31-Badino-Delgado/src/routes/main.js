const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const checkUser = require('../middlewares/checkUser');

// router.get('/',mainController.create);
// router.post('/',mainController.create);

router.get('/', mainController.login);
router.post('/',checkUser);

module.exports=router;
