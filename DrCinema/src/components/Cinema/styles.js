import { StyleSheet } from 'react-native';
import { fontColor } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#323232',
    borderColor: '#323232',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cinemaName: {
    paddingTop: 10,
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: fontColor,
  },
  cinemaWebsite: {
    color: fontColor,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  rightArrow: {
    color: '#14FFEC',
    position: 'absolute',
    top: 22,
    right: 15,
    fontSize: 16,
  },
});
