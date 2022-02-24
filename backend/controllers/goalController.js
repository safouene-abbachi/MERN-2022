const asyncHandler = require('express-async-handler');

const Goal = require('../model/goalModel');
//@desc   Get goals
//@route  GET/api/goals
//@acess  private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});
//@desc   Set goals
//@route  POST/api/goals
//@acess  private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  const goal = await Goal.create({ text: req.body.text });

  res.status(200).json(goal);
});
//@desc   Update goal
//@route PUT/api/goals/:id
//@acess  private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});
//@desc   Delete goals from
//@route  DELETE/api/goals/:id
//@acess  private
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error('goal not found');
  }
  await goal.remove();
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = { getGoals, setGoal, updateGoals, deleteGoals };
