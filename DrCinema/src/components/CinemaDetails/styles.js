import { StyleSheet } from 'react-native';
import { fontColor } from '../../styles/colors';

export default StyleSheet.create({
  container: {

  },
  cinemaName: {
    position: 'absolute',
    color: fontColor,
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 20,
  },
  cinemaDescription: {
    color: fontColor,
    fontSize: 16,
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    paddingHorizontal: 5,
    borderRadius: 10,
    overflow: 'hidden',
    textAlign: 'center',
  },
  cinemaInfo: {
    color: fontColor,
    paddingLeft: 10,
    margin: 2,
    fontSize: 14,
  },
  icon: {
    paddingLeft: 20,
  },
  coverWrap: {
    height: 105,
    alignItems: 'center',
  },
  cinemaCover: {
    flex: 1,
    width: '100%',
    height: 105,
  },
});
