import React from 'react';
import {
  View, Text, Linking, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { EvilIcons, AntDesign, Fontisto } from '@expo/vector-icons';
import { cleanString } from '../../services/formatService'
import styles from './styles';
import { CINEMA_COVER } from '../../constants/index';

const CinemaDetails = ({
  name, description, address, city, phone, website,
}) => (
  <View style={styles.container}>
    <View style={styles.coverWrap}>
      <Image style={styles.cinemaCover} source={{ uri: CINEMA_COVER }} />
      <Text style={styles.cinemaName}>{name}</Text>
    </View>
    <Text style={styles.cinemaDescription}>{cleanString(description)}</Text>
    <Text style={styles.cinemaInfo}>
      <View style={styles.icon}>
        <EvilIcons size={22} color="#14FFEC" name="location" />
      </View>
      {city}
      ,
      {' '}
      {address}
    </Text>
    <Text
      onPress={() => { Linking.openURL(`tel:${phone}`); }}
      style={[styles.cinemaInfo, { paddingLeft: 17, textDecorationLine: 'underline' }]}
    >
      <View style={styles.icon}>
        <AntDesign size={15} color="#14FFEC" name="phone" />
      </View>
      {phone}
    </Text>
    <Text
      onPress={() => Linking.openURL(`http://${website}`)}
      style={[styles.cinemaInfo, { paddingLeft: 17, textDecorationLine: 'underline' }]}
    >
      <View style={styles.icon}>
        <Fontisto size={16} color="#14FFEC" name="world-o" />
      </View>
      {website}
    </Text>
  </View>
);

CinemaDetails.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  city: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
};

CinemaDetails.defaultProps = {
  name: '',
  description: '',
  city: '',
  address: '',
  phone: '',
  website: '',
};

export default CinemaDetails;
