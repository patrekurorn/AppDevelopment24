import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getCinemas } from '../../actions/cinemaActions';
import { getMovies } from '../../actions/movieActions';
import { getUpcomingMovies } from '../../actions/upcomingMoviesActions';
import CinemaList from '../../components/CinemaList';
import UpcomingMoviesButton from '../../components/UpcomingMoviesButton';
import { background, card, fontColor, highlight } from '../../styles/colors';
import { DotsLoader } from 'react-native-indicator';

class Cinemas extends React.Component {
  state = {
    loading: false,
  }

  static navigationOptions = {
    headerTitle: 'Öll Kvikmyndahús',
    headerStyle: { backgroundColor: card },
    headerTitleStyle: { color: fontColor },
  }

  async componentDidMount() {
    this.setState({
      loading: true
    });
    await this.props.getCinemas();
    await this.props.getMovies();
    await this.props.getUpcomingMovies();
    this.setState({
      loading: false
    });
  }

  navigateToDetails(id) {
    const { navigation, cinemas } = this.props;
    const selectedCinema = cinemas.find(cinemas => cinemas.id === id);
    navigation.navigate('CinemaDetails', { id: selectedCinema.id });
  }

  sortCinemas() {
    const { cinemas } = this.props;
    const sortedCinemas = cinemas.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1);
    return sortedCinemas;
  }

  render() {
    const { cinemas } = this.props;
    const { loading } = this.state;
    return (
      <View style={{ backgroundColor: background, height: '100%' }}>
        { loading ?
          (<View style={{alignItems: 'center', marginTop: 50}}>
            <ActivityIndicator
              size='large'
              color={highlight}
             />
           </View>)
        :
          (<View><CinemaList
            cinemas={this.sortCinemas()}
            navigateToDetails={(cinemaId) => this.navigateToDetails(cinemaId)}
          />
          <UpcomingMoviesButton /></View>)
        }
      </View>
    )
  };
};

const mapStateToProps = (reduxStoreState) => {
  return {
    cinemas: reduxStoreState.cinema,
  }
};

export default connect(mapStateToProps, { getCinemas, getMovies, getUpcomingMovies })(Cinemas);
