import { StyleSheet } from 'react-native';
import { fontColor, background } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: background,
  },
  upcomingMoviesButton: {
    margin: 15,
    backgroundColor: '#323232',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  upcomingMoviesText: {
    color: '#00c7b6',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});
