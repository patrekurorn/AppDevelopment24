import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cinemas from '../views/Cinemas';
import CinemaDetails from '../views/CinemaDetails';
import MovieDetails from '../views/MovieDetails';
import UpcomingMovies from '../views/UpcomingMovies';
import UpcomingMovieDetailsView from '../views/UpcomingMovieDetailsView';

const StackNavigator = createStackNavigator({
  Cinemas,
  CinemaDetails,
  MovieDetails,
  UpcomingMovies,
  UpcomingMovieDetailsView,
});

export default createAppContainer(StackNavigator);
