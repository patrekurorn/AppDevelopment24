import React from 'react';
import {
  View, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import styles from './styles';

const Cinema = ({
  name, website,
}) => (
  <View style={styles.container}>
    <Text style={styles.cinemaName}>{name}</Text>
    <Text style={styles.cinemaWebsite}>{website}</Text>
    <AntDesign style={styles.rightArrow} name="right" />
  </View>
);

Cinema.propTypes = {
  name: PropTypes.string,
  website: PropTypes.string,
};

Cinema.defaultProps = {
  name: '',
  website: '',
};

export default withNavigation(Cinema);
