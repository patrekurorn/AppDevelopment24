import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, Image, TouchableHighlight, View,
} from 'react-native';
import logo from '../../resources/contacts.png';
import { removeTemp } from '../../services/fileService';
import styles from './styles';

const Main = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      Contactor
    </Text>
    <Image style={styles.logo} source={logo} />
    <Text style={styles.paragraph}>
      All of your contacts in one place!
      {'\n'}
      Give your parents a call.
    </Text>
    <TouchableHighlight
      style={styles.button}
      onPress={() => navigate('Contacts')}
    >
      <Text style={styles.buttonText}>My contacts</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.button}
      onPress={() => removeTemp()}
    >
      <Text style={styles.buttonText}>Reset My Phone</Text>
    </TouchableHighlight>
  </View>
);

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    dispatch: PropTypes.func,
  }).isRequired,
};

export default Main;
