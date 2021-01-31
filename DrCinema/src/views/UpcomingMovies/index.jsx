import React from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { background, fontColor } from '../../styles/colors';
import styles from './styles';
import UpcomingMoviesList from '../../components/UpcomingMoviesList';

class UpcomingMovies extends React.Component {
  state = {
    cinema: {},
    cinemaId: 0,
    movies: [],
    movie: {},
  }

  static navigationOptions = {
    headerTitle: '',
    headerStyle: { backgroundColor: '#323232' },
    headerTitleStyle: { color: fontColor },
  }

  navigateToMovie(movieId) {
    const { navigation, upcoming } = this.props;
    const { movies, cinemaId } = this.state;
    const selectedMovie = upcoming.find(movie => movie.id === movieId);
    navigation.navigate('UpcomingMovieDetailsView', { movieId: selectedMovie.id });
  }

  render() {
    const { cinema, movies } = this.state;
    return (
      <View style={{ backgroundColor: background }}>
        <UpcomingMoviesList
          upcoming={this.props.upcoming}
          navigateToMovie={(movieId) => this.navigateToMovie(movieId)}
        />
      </View>
    )
  }
}

const mapStateToProps = (reduxStoreState) => {
	return {
		upcoming: reduxStoreState.upcoming.sort((a, b) => b['release-dateIS'] > a['release-dateIS'])
	};
};

export default connect(mapStateToProps)(UpcomingMovies);
