import express from 'express';
import Graduation from '../models/graduationModel.js';

const router = express.Router();

// Set Graduation Date
router.post('/set', async (req, res) => {
  try {
    const graduationDate = new Date('2023-09-08');
    const newGraduation = new Graduation({ date: graduationDate });
    await newGraduation.save();
    res.json({ message: 'Graduation date set successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error setting graduation date', error });
  }
});

// Get Graduation Date
router.get('/', async (req, res) => {
  try {
    const graduation = await Graduation.findOne({});
    if (graduation) {
      res.json(graduation.date);
    } else {
      res.status(404).json({ message: 'Graduation date not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching graduation date', error });
  }
});

export default router;
