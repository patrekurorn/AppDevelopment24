import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, Image, TouchableHighlight, View,
} from 'react-native';
import logo from '../../resources/checklist.png';
import styles from './style';

const Main = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      Toodler
    </Text>
    <Image style={styles.logo} source={logo} />
    <Text style={styles.paragraph}>
      Welcome to your checklist app!
      {'\n'}
      Keep all your tasks organized in one place.
    </Text>
    <TouchableHighlight
      style={styles.button}
      onPress={() => navigate('Boards')}
    >
      <Text style={styles.buttonText}>My Boards</Text>
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
