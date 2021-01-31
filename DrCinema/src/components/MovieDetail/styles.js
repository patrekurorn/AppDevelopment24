import { StyleSheet } from 'react-native';
import { fontColor } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  coverImageWrap: {
    position: 'absolute',
    width: '100%',
    marginTop: 0,
    height: 170,
    flex: 1,
  },
  coverImage: {
    flex: 1,
    width: '100%',
    height: 170,
  },
  posterImage: {
    position: 'absolute',
    width: 100,
    height: 152,
    marginTop: -50,
    marginLeft: 25,
    borderRadius: 13,
    zIndex: 1,
  },
  detailsWrap: {
    width: '100%',
    marginTop: 170,
  },
  headerDetailsWrap: {
    width: '100%',
    alignItems: 'flex-end',
  },
  headerDetails: {
    height: 100,
    width: '65%',
  },
  title: {
    color: fontColor,
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    marginRight: 5,
  },
  bodyDetails: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  tempNavSpace: {
    marginTop: 30,
    height: 60,
    backgroundColor: 'grey',
    width: '100%',
  },

});
