const express = require('express');
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoals,
  deleteGoals,
} = require('../controllers/goalController');
const { protect } = require('../middelware/authMiddleware');
router.route('/').get(protect, getGoals).post(protect, setGoal);
router.route('/:id').put(protect, updateGoals).delete(protect, deleteGoals);

module.exports = router;
