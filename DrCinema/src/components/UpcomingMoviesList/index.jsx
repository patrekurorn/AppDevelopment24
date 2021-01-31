import React from 'react';
import {
  View, FlatList, TouchableOpacity, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import UpcomingMovie from '../UpcomingMovie';
import styles from './styles';

const UpcomingMoviesList = ({
  upcoming, navigateToMovie,
}) => (
  <View style={{ marginBottom: 25 }}>
    <FlatList
      ListHeaderComponent={(
        <>
          <Text style={styles.title}>Væntanlegt</Text>
        </>
      )}
      numColumns={2}
      data={upcoming}
      columnWrapperStyle={{ justifyContent: 'space-around' }}
      renderItem={({
        item,
      }) => (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigateToMovie(item.id)}
        >
          <UpcomingMovie
            item={item}
          />
        </TouchableOpacity>
      )}
      keyExtractor={(movie) => movie.id.toString()}
    />
  </View>
);

UpcomingMoviesList.propTypes = {
  /* movies: PropTypes.arrayOf(PropTypes.shape({
    poster: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape({
      Name: PropTypes.string.isRequired,
    })),
  })).isRequired, */
};

export default UpcomingMoviesList;
