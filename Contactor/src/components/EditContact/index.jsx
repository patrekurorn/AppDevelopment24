import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Image, View, Text, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';

const EditContact = ({
  id, name, thumbnailPhoto, phoneNr, onSave, takePhoto, selectFromCameraRoll
}) => {
  const [value, setValue] = useState({
    id,
    name,
    thumbnailPhoto,
    phoneNr,
  });

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <KeyboardAvoidingView behaviour={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <Image
            style={styles.photo}
            resizeMode="cover"
            source={{ uri: thumbnailPhoto }}
          />
          <View style={styles.photoButtons}>
            <TouchableOpacity onPress={() => takePhoto()}>
              <Text style={ styles.button }>TAKE PHOTO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectFromCameraRoll()}>
              <Text style={ styles.button }>CHOOSE PHOTO</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.label}>Name</Text>
          <View style={styles.fieldWrap}>
            <TextInput
              style={styles.field}
              value={value.name}
              onChangeText={(text) => setValue({ ...value, name: text })}
            />
          </View>
          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.fieldWrap}>
            <TextInput
              style={styles.field}
              value={value.phoneNr}
              onChangeText={(text) => setValue({ ...value, phoneNr: text })}
              keyboardType="numeric"
              maxLength={12}
            />
          </View>
          <TouchableOpacity
            onPress={() => onSave(value.id, value.name, value.phoneNr)}
          >
            <Text style={ value.name && value.phoneNr ? styles.saveButton : styles.disabledButton }>
              SAVE
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

EditContact.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnailPhoto: PropTypes.string.isRequired,
  phoneNr: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditContact;
