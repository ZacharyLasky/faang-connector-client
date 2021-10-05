import axios from 'axios';

export const getAllJobs = (company = '') =>
  axios.get(`${process.env.REACT_APP_API_URL}/api/jobs?company=${company}`);

export const getJobById = (id) => axios.get(`${process.env.REACT_APP_API_URL}/api/jobs/${id}`);
