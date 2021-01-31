import { StyleSheet } from 'react-native';
import { fontColor } from '../../styles/colors';

export default StyleSheet.create({
  title: {
    fontSize: 16,
    color: fontColor,
    paddingBottom: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  container: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
});
