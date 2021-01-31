import axios from 'axios';
import { getToken } from './authService';

const moviesUrl = 'https://api.kvikmyndir.is/movies';
const cinemasUrl = 'https://api.kvikmyndir.is/theaters';
const upcomingUrl = 'https://api.kvikmyndir.is/upcoming';

export const getAllMovies = async () => {
  const token = await getToken();
  return axios.get(moviesUrl, { headers: { 'x-access-token': token } }).then((response) => response.data);
};

export const getAllCinemas = async () => {
  const token = await getToken();
  return axios.get(cinemasUrl, { headers: { 'x-access-token': token } }).then((response) => response.data);
};

export const getAllUpcomingMovies = async () => {
  const token = await getToken();
  return axios.get(upcomingUrl, { headers: { 'x-access-token': token } }).then((response) => response.data);
};
