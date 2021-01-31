import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  task: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 0,
  },
  taskTitle: {
    fontSize: 18,
    marginLeft: 40
  },
  taskDescription: {
    fontSize: 12,
    width: "90%",
    marginLeft: 40
  },
  taskBorder: {
    marginTop: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  checkmarkDone: {
    position: 'absolute',
    left: 0,
    top: '50%',
    marginLeft: 10,
    fontSize: 26,
  },
  checkmarkSelected: {
    position: 'absolute',
    top: 15,
    right: 15,
    fontSize: 16,
  },
  taskFinished: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  }
});
