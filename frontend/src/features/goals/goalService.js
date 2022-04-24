import axios from 'axios';

const API_URL = '/api/goals';
// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const result = await axios.get(API_URL, config);
  return result.data;
};
// Create a new goal
const createGoal = async (token, goalData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const result = await axios.post(API_URL, goalData, config);
  return result.data;
};
// Delete Goal
const deleteGoal = async (token, goalId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const result = await axios.delete(API_URL, goalId, config);
  return result.data;
};

const goalService = {
  getGoals,
  createGoal,
  deleteGoal,
};

export default goalService;
