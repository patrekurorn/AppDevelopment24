import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  caption: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    height: 30,
  },
  item: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
    marginBottom: 5,
  },
  field: {
    marginBottom: 20,
  },
  colorWrap: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  color: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  photoWrap: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  photo: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    width: 75,
    height: 75,
    borderRadius: 10,
  },
  actionWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  actionButton: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  checkmark: {
    fontSize: 30,
    color: 'black',
    marginLeft: 10,
  },
});
