import React from 'react';
import {
  View, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { POSTER_PLACEHOLDER } from '../../constants/index';

const UpcomingMovie = ({
  item,
}) => (
  <View style={styles.container}>
    { item.poster === 'https://kvikmyndir.is/images/poster/' || item.poster === ''
      ? (
        <Image
          style={styles.poster}
          resizeMode="cover"
          source={{ uri: POSTER_PLACEHOLDER }}
        />
      )
      : (
        <Image
          style={styles.poster}
          resizeMode="cover"
          source={{ uri: item.poster }}
        />
      )}
    <Text style={styles.movieReleaseDate}>{item['release-dateIS']}</Text>
    <Text style={styles.movieTitle}>{item.title}</Text>
  </View>
);

UpcomingMovie.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    _id: PropTypes.string,
    poster: PropTypes.string,
    title: PropTypes.string,
    'release-dateIS': PropTypes.string,
  }),
};

UpcomingMovie.defaultProps = {
  item: '',
};

export default UpcomingMovie;
