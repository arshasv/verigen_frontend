import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000'; // Or your actual API base URL

export const signUpUser = async (userData: any) => { 
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData); 
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    if (axios.isAxiosError(error)) {
      console.error('Detailed Error:', error.response?.data);
      console.error('Error Status:', error.response?.status);
      // Consider throwing the error here to handle it in your component
      throw error; 
    }
    throw error; // Re-throw the error if it's not an AxiosError
  }
};

export const signInUser = async (userData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, userData); 
    return response.data;
  } catch (error) {
    console.error('Error signing in:', error);
    if (axios.isAxiosError(error)) {
      console.error('Detailed Error:', error.response?.data);
      console.error('Error Status:', error.response?.status);
      // Consider throwing the error here to handle it in your component
      throw error; 
    }
    throw error; // Re-throw the error if it's not an AxiosError
  }
};