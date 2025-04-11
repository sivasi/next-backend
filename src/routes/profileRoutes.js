const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { getUserdetails } = require('../controllers/userController');
const router = express.Router();

router.get('/', authMiddleware, getUserdetails);

module.exports = router;