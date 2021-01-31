import * as constants from '../constants';
import { getAllCinemas } from '../services/dataService';

export const getCinemas = () => {
  return async dispatch => {
    try {
      console.log('getCinemas called!')
      const allCinemas = await getAllCinemas();
      dispatch(getCurrentCinemasSuccess(allCinemas));
    } catch (err) {
      return (err);
    }
  }
};

const getCurrentCinemasSuccess = (currentCinemas) => ({
  type: constants.GET_CINEMAS,
  payload: currentCinemas,
});
