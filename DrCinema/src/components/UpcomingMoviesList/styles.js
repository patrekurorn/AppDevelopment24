import { StyleSheet } from 'react-native';
import { fontColor } from '../../styles/colors';

export default StyleSheet.create({
  title: {
    color: fontColor,
    marginTop: 10,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  list: {
    justifyContent: 'space-between',
  },
});
