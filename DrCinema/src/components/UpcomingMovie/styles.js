import { StyleSheet } from 'react-native';
import { fontColor } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    marginBottom: 20,
    marginLeft: 0,
    width: 160,
  },
  poster: {
    height: 220,
    width: 160,
    borderRadius: 12,
  },
  movieTitle: {
    color: fontColor,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  movieReleaseDate: {
    color: fontColor,
    textAlign: 'center',
    fontSize: 11,
  },
});
