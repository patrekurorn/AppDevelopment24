import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import styles from './styles';

const UpcomingMoviesButton = ({
  navigation: { navigate },
}) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => navigate('UpcomingMovies')}
      activeOpacity={0.7}
      style={styles.upcomingMoviesButton}
    >
      <Text style={styles.upcomingMoviesText}>Væntanlegar Myndir</Text>
    </TouchableOpacity>
  </View>
);

UpcomingMoviesButton.propTypes = {

};

export default withNavigation(UpcomingMoviesButton);
