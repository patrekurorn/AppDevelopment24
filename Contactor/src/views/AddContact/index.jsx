import React from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import ContactDetail from '../../components/ContactDetail';
import EditContact from '../../components/EditContact';
import { withNavigation } from 'react-navigation';
import { addContact, addImage } from '../../services/fileService';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import styles from './styles';

class AddContact extends React.Component {
  state = {
    id: 22,
    name: '',
    // Random image to make "source.uri should not be an empty string" warning go away
    thumbnailPhoto: "https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png",
    phoneNr: '',
  }

  async onAdd() {
    const { navigation } = this.props;
    const { id, name, thumbnailPhoto, phoneNr } = this.state;
    if (name && phoneNr) {
      const phoneNrOnlyNumbers = phoneNr.replace(/[^0-9]/g, '');
      const contact = {
        id: parseInt(phoneNrOnlyNumbers),
        name: name,
        thumbnailPhoto: thumbnailPhoto,
        phoneNr: phoneNrOnlyNumbers,
      }
      await addContact(contact);
      navigation.navigate('Contacts');
    }
  }

  async takePhoto() {
    const photo = await takePhoto();
    if (photo.length > 0) { await this.addImage(photo); }
  }

  async selectFromCameraRoll() {
    const photo = await selectFromCameraRoll();
    if (photo.length > 0) { await this.addImage(photo); }
  }

  async addImage(image) {
    const newImage = await addImage(image);
    const { thumbnailPhoto } = this.state;
    const imageFile = `data:image/png;base64,${newImage.file}`
    this.setState({
      thumbnailPhoto: imageFile
    });
  }

  render() {
    const { id, name, thumbnailPhoto, phoneNr } = this.state;
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        >
        <KeyboardAvoidingView behaviour={Platform.OS == "ios" ? "padding" : "height"}>

          <View style={styles.container}>
            <Image
              style={styles.photo}
              resizeMode="cover"
              source={{ uri: thumbnailPhoto }}
            />

            <View style={ styles.photoButtons }>
              <TouchableOpacity onPress={() => this.takePhoto()}>
                <Text style={ styles.button }>TAKE PHOTO</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.selectFromCameraRoll()}>
                <Text style={ styles.button }>CHOOSE PHOTO</Text>
              </TouchableOpacity>
            </View>


            <Text style={ styles.label }>Name</Text>

            <View style={ styles.fieldWrap }>
              <TextInput style={ styles.field } value={name} onChangeText={(value) => this.setState({name: value})}/>
            </View>

            <Text style={ styles.label }>Phone Number</Text>

            <View style={ styles.fieldWrap }>
                <TextInput style={ styles.field } keyboardType="numeric" maxLength={12} value={phoneNr} onChangeText={(value) => this.setState({phoneNr: value})}/>
            </View>

            <TouchableOpacity onPress={() => this.onAdd()}>
              <Text style={ phoneNr && name ? styles.addButton : styles.disabledButton }>
                ADD
              </Text>
            </TouchableOpacity>

          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

export default AddContact;
