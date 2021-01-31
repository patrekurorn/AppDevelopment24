import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Genres from '../Genres';

const SingleMovie = ({
  poster, title, year, genres,
}) => (
  <View style={styles.container}>
    <Image
      style={styles.poster}
      resizeMode="cover"
      source={{ uri: poster }}
    />
    <Text style={styles.movieYear}>
      -
      {' '}
      {year}
      {' '}
      -
    </Text>
    <Text style={styles.movieTitle}>{title}</Text>
    <Genres genres={genres} fontSize={8} style={styles.movieGenres} />
  </View>
);

SingleMovie.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
};

SingleMovie.defaultProps = {
  poster: '',
  title: '',
  year: '',
};

export default SingleMovie;
