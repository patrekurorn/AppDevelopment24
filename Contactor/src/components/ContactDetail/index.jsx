import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, View, Text, TouchableOpacity, Linking,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

const ContactDetail = ({
  id, name, thumbnailPhoto, phoneNr,
}) => (

  <View style={styles.container}>
    <Image
      style={styles.photo}
      resizeMode="cover"
      source={{ uri: thumbnailPhoto }}
    />

    <View>
      <Text style={styles.name}>{name}</Text>
    </View>

    <View style={styles.phoneNrView}>
      <TouchableOpacity
        style={{ flexDirection: 'row' }}
        onPress={() => { Linking.openURL(`tel:${phoneNr}`); }}
      >
        <FontAwesome style={styles.phoneIcon} name="phone" />
        <Text style={styles.phoneNr}>
          {phoneNr}
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

ContactDetail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnailPhoto: PropTypes.string.isRequired,
  phoneNr: PropTypes.string.isRequired,
};

export default ContactDetail;
