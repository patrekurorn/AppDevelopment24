import React from 'react';
import { View, Text, Button } from 'react-native';
import UpcomingMovieDetails from '../../components/UpcomingMovieDetails';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { background, fontColor } from '../../styles/colors';

class UpcomingMovieDetailsView extends React.Component {
  state = {
    movie: {},
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
    const currentMovie = this.findMovie(movieId);
    const trailers = this.findTrailers(currentMovie);
    this.setState({
      movie: currentMovie,
      trailers: trailers,
    });
  }

  findMovie(movieId) {
    const currentMovie = this.props.upcoming.find(m => m.id == movieId);
    return currentMovie;
  }

  findTrailers(movie) {
    if (movie.trailers.length > 0) { return movie.trailers[0].results }
    return [];
  }

  render() {
    const { movie, trailers } = this.state;
    return (
      <View style={{ width: '100%', height: '100%', backgroundColor: background }}>
        <UpcomingMovieDetails movie={movie} trailers={trailers} />
      </View>
    );
  }
}

const mapStateToProps = ({ upcoming }) => ({ upcoming });

export default connect(mapStateToProps)(UpcomingMovieDetailsView);
