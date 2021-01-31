import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CinemaDetails from '../../components/CinemaDetails';
import MovieList from '../../components/MovieList';
import { cleanString } from '../../services/formatService';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import { background, card, fontColor } from '../../styles/colors';

class CinemaDetailsView extends React.Component {
  state = {
    cinema: {},
    cinemaId: 0,
    movies: [],
  }

  static navigationOptions = {
    headerTitle: '',
    headerStyle: { backgroundColor: card },
    headerTitleStyle: { color: fontColor },
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', -1);
    const currentCinema = this.findCinema(id)
    const currentMovies = this.findMovies(currentCinema.id)
    this.setState({
      cinema: currentCinema,
      cinemaId: currentCinema.id,
      movies: currentMovies,
    });
  }

  findCinema(id) {
    const currentCinema = this.props.cinema.find(c => c.id == id)
    currentCinema.description = cleanString(currentCinema.description);
    return currentCinema
  }

  findMovies(cinemaId) {
    const movies = this.props.movie.filter(m => { return m.showtimes.some(s => s.cinema.id == cinemaId)})
    return movies
  }

  navigateToMovie(movieId) {
    const { navigation } = this.props;
    const { movies, cinemaId } = this.state;
    const selectedMovie = movies.find(movie => movie.id === movieId);
    navigation.navigate('MovieDetails', { movieId: selectedMovie.id, cinemaId: cinemaId });
  }

  render() {
    const { cinema, movies } = this.state;
    return (
      <View style={{ backgroundColor: background, height: '100%' }}>
        <MovieList
          cinemaId={cinema.id}
          cinemaName={cinema.name}
          cinemaDescription={cinema.description}
          cinemaAddress={cinema['address\t']}
          cinemaCity={cinema.city}
          cinemaPhone={cinema.phone}
          cinemaWebsite={cinema.website}
          movies={movies}
          navigateToMovie={(movieId) => this.navigateToMovie(movieId)}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ cinema, movie }) => ({ cinema, movie });

export default connect(mapStateToProps)(CinemaDetailsView);
