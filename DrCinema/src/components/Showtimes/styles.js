import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  showtimes: {
    width: '100%',
    paddingTop: 10,
  },
  showtimeWrap: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 55,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
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
  column: {
    width: '33%',
    justifyContent: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  middle: {
    alignItems: 'center',
  },
  right: {
    alignItems: 'flex-end',
  },
  rightText: {
    marginRight: 20,
  },
  rightArrow: {
    color: '#14FFEC',
    position: 'absolute',
    right: 0,
    top: 2,
    fontSize: 16,
  },

});
