import axios from 'axios';

const URL = "https://new-edufy-backend.onrender.com/user/dashboard";

export const getDashboard = async () => {



  const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No token found, please sign in first.');
        
    };
    console.log('Token found:', token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  return axios.get(URL, config);
};
