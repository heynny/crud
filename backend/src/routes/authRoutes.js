const express = require('express');
const router = express.Router();
const controladorAutenticacion = require('../controllers/authController');

router.post('/registrar', controladorAutenticacion.userRegister);
router.post('/login', controladorAutenticacion.login);

module.exports = router;
