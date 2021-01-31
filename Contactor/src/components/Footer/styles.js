import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
  importButton: {
    margin: 15,
    backgroundColor: '#D3D3D3',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 13,
    marginRight: 13,
    marginTop: 5,
    marginBottom: 5,
  },
  buttonTextDisabled: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#C0C0C0',
    marginLeft: 13,
    marginRight: 13,
    marginTop: 5,
    marginBottom: 5,
  },
});
