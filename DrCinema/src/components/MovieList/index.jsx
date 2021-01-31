import React from 'react';
import {
  View, FlatList, Text, TouchableOpacity, ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import SingleMovie from '../SingleMovie';
import CinemaDetails from '../CinemaDetails';
import styles from './styles';

const MovieList = ({
  movies, cinemaId, cinemaName, cinemaDescription, cinemaAddress,
  cinemaCity, cinemaPhone, cinemaWebsite, navigateToMovie,
}) => (
  <View style={{ marginTop: 0, marginBottom: 10 }}>
    { movies.length
      ? (
        <FlatList
          style={{ height: '100%' }}
          ListHeaderComponent={(
            <>
              <CinemaDetails
                id={cinemaId}
                name={cinemaName}
                description={cinemaDescription}
                address={cinemaAddress}
                city={cinemaCity}
                phone={cinemaPhone}
                website={cinemaWebsite}
              />
              <Text style={styles.title}>Bíómyndir</Text>
            </>
        )}
          numColumns={2}
          data={movies}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          renderItem={({
            item: {
              id, poster, title, year, genres,
            },
          }) => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigateToMovie(id)}
            >
              <SingleMovie
                poster={poster}
                title={title}
                year={year}
                genres={genres}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(movie) => movie.id}
        />
      )
      : (
        <ScrollView style={{ height: '100%' }}>
          <CinemaDetails
            id={cinemaId}
            name={cinemaName}
            description={cinemaDescription}
            address={cinemaAddress}
            city={cinemaCity}
            phone={cinemaPhone}
            website={cinemaWebsite}
          />
          <Text style={styles.title}>Kvikmyndir</Text>
          <Text style={styles.noMovies}>Því miður eru engar kvikmyndir á dagskrá í dag</Text>
        </ScrollView>
      )}
  </View>
);

MovieList.propTypes = {
  /* movies: PropTypes.arrayOf(PropTypes.shape({
    poster: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape({
      Name: PropTypes.string.isRequired,
    })),
  })).isRequired, */
};

export default MovieList;
