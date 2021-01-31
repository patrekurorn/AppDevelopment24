import { StyleSheet } from 'react-native';
import { white, cambridgeBlue } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: cambridgeBlue,
    alignItems: 'center',
  },
  title: {
    marginTop: 70,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  paragraph: {
    textAlign: 'center',
    color: 'black',
  },
  button: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: white,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
  logo: {
    marginTop: 10,
    marginBottom: 50,
    width: 140,
    height: 200,
  },
});
