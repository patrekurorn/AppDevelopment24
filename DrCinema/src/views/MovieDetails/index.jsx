import React from 'react';
import { View, Text, Button } from 'react-native';
import MovieDetail from '../../components/MovieDetail';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { background, fontColor } from '../../styles/colors';

class MovieDetails extends React.Component {
  state = {
    movie: {},
    schedule: [],
    theatre: '',
    trailers: [],
  }

  static navigationOptions = {
    headerTitle: '',
    headerStyle: { backgroundColor: '#323232' },
    headerTitleStyle: { color: fontColor },
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const movieId = navigation.getParam('movieId', -1);
    const cinemaId = navigation.getParam('cinemaId', -1);
    const currentMovie = this.findMovie(movieId);
    const schedule = this.findSchedule(cinemaId, currentMovie);
    const theatre = this.findTheatre(cinemaId, currentMovie);
    const trailers = this.findTrailers(currentMovie);

    if (!'id' in currentMovie.showtimes[0].cinema) currentMovie.showtimes[0].cinema = { 'id': currentMovie.showtimes[0].cinema }

    this.setState({
      movie: currentMovie,
      schedule: schedule,
      theatre: theatre,
      trailers: trailers,
    });
  }

  findMovie(movieId) {
    const currentMovie = this.props.movie.find(m => m.id == movieId);
    if (!'ID' in currentMovie.genres) JSON.parse(currentMovie.genres)[0] = [];
    return currentMovie;
  }

  findSchedule(cinemaId, movie) {
    const showtimes = movie.showtimes.find(s => s.cinema.id == cinemaId);
    return showtimes.schedule;
  }

  findTheatre(cinemaId, movie) {
    const showtimes = movie.showtimes.find(s => s.cinema.id == cinemaId);
    return showtimes.cinema.name;
  }

  findTrailers(movie) {
    return movie.trailers[0].results
  }

  render() {
    const { movie, schedule, theatre, trailers } = this.state;
    return (
      <View style={{ width: '100%', height: '100%', backgroundColor: background }}>
        <MovieDetail movie={movie} schedule={schedule} theatre={theatre} trailers={trailers} />
      </View>
    );
  }
}

const mapStateToProps = ({ movie }) => ({ movie });

export default connect(mapStateToProps)(MovieDetails);
