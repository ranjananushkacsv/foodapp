const express = require('express');
const foodRouter = express.Router();
const { addFood } = require('../controllers/foodController');
const multer = require('multer');

// image storage engine
const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  }
});

const upload = multer({ storage });

foodRouter.post('/add', upload.single('image'), addFood);

module.exports = foodRouter;
