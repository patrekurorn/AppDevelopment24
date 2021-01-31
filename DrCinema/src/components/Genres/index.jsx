import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Genres = ({ genres, fontSize=12 }) => {
  if (typeof genres !== 'undefined') {
    return (
      <View style={styles.genresWrap}>
        {
          genres.map((genre, key) => (
            <View key={key} style={styles.genre}>
              <Text style={[styles.text, { fontSize }]} key={key}>{ genre.Name }</Text>
            </View>
          ))
        }
      </View>
    )
  }
  return ( <View></View>);
};

export default Genres;
