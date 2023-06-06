import axios from 'axios';

const API_URL = 'http://localhost:5173';

export const getTasks = () => {
  return axios.get(`${API_URL}/tasks`);
};

export const createTask = (task) => {
  return axios.post(`${API_URL}/tasks`, task);
};

export const updateTask = (taskId, updatedTask) => {
  return axios.put(`${API_URL}/tasks/${taskId}`, updatedTask);
};

export const deleteTask = (taskId) => {
  return axios.delete(`${API_URL}/tasks/${taskId}`);
};
