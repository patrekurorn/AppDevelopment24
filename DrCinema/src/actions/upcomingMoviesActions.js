import * as constants from '../constants';
import { getAllUpcomingMovies } from '../services/dataService';

export const getUpcomingMovies = () => {
  return async dispatch => {
      try {
        console.log('getUpcomingMovies called!')
        const allUpcomingMovies = await getAllUpcomingMovies();
        dispatch(getCurrentUpcomingMoviesSuccess(allUpcomingMovies));
      } catch (err) {
          return (err);
      }
  };
};

const getCurrentUpcomingMoviesSuccess = (currentUpcomingMovies) => ({
  type: constants.GET_UPCOMING_MOVIES,
  payload: currentUpcomingMovies,
});
