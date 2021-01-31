import { StyleSheet } from 'react-native';
import { bluePhone } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    marginTop: 50,
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
  name: {
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 24,
  },
  phoneNrView: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    alignSelf: 'stretch',
    borderRadius: 4,
    backgroundColor: '#DCDCDC',
  },
  phoneNr: {
    padding: 4,
    fontSize: 18,
    color: bluePhone,
  },
  phoneIcon: {
    padding: 4,
    fontSize: 20,
    color: bluePhone,
  },
});
