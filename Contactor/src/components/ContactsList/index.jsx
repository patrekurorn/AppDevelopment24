import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import styles from './styles';
import SingleContact from '../SingleContact';

const ContactsList = ({
  contacts, reload,
}) => (
  <View style={styles.list}>
    <FlatList
      numColumns={1}
      data={contacts}
      renderItem={({
        item: {
          id, name, thumbnailPhoto, phoneNr,
        },
      }) => (
        <SingleContact
          id={parseInt(id)}
          name={name}
          thumbnailPhoto={thumbnailPhoto}
          phoneNr={phoneNr}
          reload={reload}
        />
      )}
      keyExtractor={(contact) => contact.id.toString()}
    />
  </View>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnailPhoto: PropTypes.string.isRequired,
    phoneNr: PropTypes.string.isRequired,
  })).isRequired,
  reload: PropTypes.func.isRequired,
};

export default ContactsList;
