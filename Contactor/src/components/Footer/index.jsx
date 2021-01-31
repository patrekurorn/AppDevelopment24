import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Footer = ({ contactsOS, importPressed }) => (

  <View style={styles.container}>
    { importPressed
      ? (
        <TouchableOpacity disabled style={styles.importButton}>
          <Text style={styles.buttonTextDisabled}>Import contacts from OS</Text>
        </TouchableOpacity>
      )
      : (
        <TouchableOpacity style={styles.importButton} onPress={contactsOS}>
          <Text style={styles.buttonText}>Import contacts from OS</Text>
        </TouchableOpacity>
      )}
  </View>
);

Footer.propTypes = {
  contactsOS: PropTypes.func.isRequired,
  importPressed: PropTypes.bool.isRequired,
};

export default Footer;
