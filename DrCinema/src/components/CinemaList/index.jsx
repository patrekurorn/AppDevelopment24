import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cinema from '../Cinema';
import { getCinemas } from '../../actions/cinemaActions';

const CinemaList = ({ cinemas, navigateToDetails }) => (
  <View style={{ marginBottom: 70 }}>
    <FlatList
      numColumns={1}
      data={cinemas}
      ListHeaderComponent={<View style={{ height: 15 }} />}
      ListFooterComponent={<View style={{ height: 25 }} />}
      renderItem={({
        item: {
          id, name, website,
        },
      }) => (
        <TouchableOpacity
          onPress={() => navigateToDetails(id)}
          key={id}
        >
          <Cinema
            key={id}
            id={id}
            name={name}
            website={website}
            navigateToDetails={(cinemaId) => navigateToDetails(cinemaId)}
          />
        </TouchableOpacity>
      )}
      keyExtractor={(cinema) => cinema.name}
    />
  </View>
);

CinemaList.propTypes = {
  cinemas: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    website: PropTypes.string,
  })).isRequired,
};

export default connect(null, { getCinemas })(CinemaList);
