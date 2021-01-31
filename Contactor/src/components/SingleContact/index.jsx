import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, View, Text, TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Swipeout from 'react-native-swipeout';
import { EvilIcons } from '@expo/vector-icons';
import styles from './styles';
import { removeContact } from '../../services/fileService';

const SingleContact = ({
  id, name, thumbnailPhoto, phoneNr, reload, navigation: { navigate },
}) => {
  async function remove() {
    await removeContact(id, name);
    reload();
  }

  const swipeButtons = [{
    text: <EvilIcons style={{ fontSize: 35, fontWeight: 'bold' }} name="trash" />,
    backgroundColor: '#ff4d4d',
    underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
    onPress: () => remove(id, name),
  }];

  return (
    <Swipeout
      right={swipeButtons}
      autoClose
      backgroundColor="transparent"
    >
      <TouchableOpacity
        onPress={() => navigate('Details', {
          id, name, thumbnailPhoto, phoneNr,
        })}
      >
        <View style={styles.contact}>
          <Image
            style={styles.photo}
            resizeMode="cover"
            source={{ uri: thumbnailPhoto }}
          />
          <Text style={styles.name}>{name}</Text>
        </View>
      </TouchableOpacity>
    </Swipeout>
  );
};

SingleContact.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnailPhoto: PropTypes.string.isRequired,
  phoneNr: PropTypes.string.isRequired,
  reload: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    dispatch: PropTypes.func,
  }).isRequired,
};

export default withNavigation(SingleContact);
