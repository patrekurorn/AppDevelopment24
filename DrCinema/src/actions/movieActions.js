import * as constants from '../constants';
import { getAllMovies } from '../services/dataService';

export const getMovies = () => {
    return async dispatch => {
        try {
          console.log('getMovies called!')
          const allMovies = await getAllMovies();
          dispatch(getCurrentMoviesSuccess(allMovies));
        } catch (err) {
            return (err);
        }
    };
}

const getCurrentMoviesSuccess = (currentMovies) => ({
  type: constants.GET_MOVIES,
  payload: currentMovies,
});
