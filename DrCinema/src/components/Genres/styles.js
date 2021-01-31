import { StyleSheet } from 'react-native';
import { fontColor } from '../../styles/colors';

export default StyleSheet.create({
  genresWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  genre: {
    borderRadius: 20,
    alignSelf: 'flex-start',
    paddingHorizontal: 6,
    paddingVertical: 4,
    margin: 2,
    backgroundColor: '#323232',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    color: fontColor,
  },
});
