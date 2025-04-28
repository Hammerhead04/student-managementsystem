import axios from 'axios';

const API_URL = 'http://localhost:6890/api/students';

const api = {
  // Get all students
  getStudents: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },
  
  // Get a single student by ID
  getStudent: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },
  
  // Create a new student
  createStudent: async (studentData) => {
    const response = await axios.post(API_URL, studentData);
    return response.data;
  },
  
  // Update an existing student
  updateStudent: async (id, studentData) => {
    const response = await axios.put(`${API_URL}/${id}`, studentData);
    return response.data;
  },
  
  // Delete a student
  deleteStudent: async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  }
};

export default api;