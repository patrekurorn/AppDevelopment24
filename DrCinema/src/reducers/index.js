import { combineReducers } from 'redux';
import cinema from './cinemaReducer';
import movie from './movieReducer';
import upcoming from './upcomingMoviesReducer';

export default combineReducers({
  cinema,
  movie,
  upcoming,
});
