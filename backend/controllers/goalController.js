const asyncHandler = require('express-async-handler');
//@desc   Get goals
//@route  GET/api/goals
//@acess  private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Goals' });
});
//@desc   Set goals
//@route  POST/api/goals
//@acess  private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  res.status(200).json({ message: 'Set goal' });
});
//@desc   Update goal
//@route PUT/api/goals/:id
//@acess  private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
});
//@desc   Delete goals from
//@route  DELETE/api/goals/:id
//@acess  private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = { getGoals, setGoal, updateGoals, deleteGoals };
