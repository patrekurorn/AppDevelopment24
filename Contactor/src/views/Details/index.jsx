import React from 'react';
import { View, Text, Button } from 'react-native';
import ContactDetail from '../../components/ContactDetail';
import EditContact from '../../components/EditContact';
import { withNavigation } from 'react-navigation';
import { editContact, addImage } from '../../services/fileService';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';

class Details extends React.Component {
  state = {
    contacts: [],
    id: 0,
    name: '',
    // Random image to make "source.uri should not be an empty string" warning go away
    thumbnailPhoto: "https://c402277.ssl.cf1.rackcdn.com/photos/6526/images/hero_full/sloth_%28c%29_Jorge_Salas_International_Expeditions.JPG",
    phoneNr: '',
    oldId: 0,
    oldName: '',
  }

  async componentDidMount(){
    const { navigation } = this.props;
    const id = navigation.getParam('id', -1);
    const name = navigation.getParam('name', -1);
    const thumbnailPhoto = navigation.getParam('thumbnailPhoto', -1);
    const phoneNr = navigation.getParam('phoneNr', -1);

    this.props.navigation.setParams({
      isEditing: this.onEdit,
    })

    this.setState({
      id: phoneNr,
      name: name,
      thumbnailPhoto: thumbnailPhoto,
      phoneNr: phoneNr,
      oldId: id,
      oldName: name,
    });
  }

  onEdit = () => {
    this.setState({
      isEditing: true
    })
  }

  onSave = (id, name, phoneNr) => {
    if (name && phoneNr) {
      const phoneNrOnlyNumbers = phoneNr.replace(/[^0-9]/g, '');
      const { thumbnailPhoto } = this.state;
      const contact = {
        "id": phoneNrOnlyNumbers,
        "name": name,
        "thumbnailPhoto": thumbnailPhoto,
        "phoneNr": phoneNrOnlyNumbers,
      };
      editContact(contact, this.state.oldId, this.state.oldName);
      this.setState({
        isEditing: false,
        id: phoneNrOnlyNumbers,
        name: name,
        thumbnailPhoto: thumbnailPhoto,
        phoneNr: phoneNrOnlyNumbers,
        oldId: phoneNrOnlyNumbers,
        oldName: name,
      })
    }
  }

  async addImage(image) {
    const newImage = await addImage(image);
    const imageFile = `data:image/png;base64,${newImage.file}`
    this.setState({
      thumbnailPhoto: imageFile
    });
  }

  async takePhoto() {
    const photo = await takePhoto();
    if (photo.length > 0) { await this.addImage(photo); }
  }

  async selectFromCameraRoll() {
    const photo = await selectFromCameraRoll();
    if (photo.length > 0) { await this.addImage(photo); }
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
		return {
			headerRight: () => (
				<Button
					onPress={() => params.isEditing()}
					title='Edit'
					color='black'
				/>
			),
      headerRightContainerStyle: {
        paddingRight: 10
      }
		};
	};

  render() {
    const { id, name, thumbnailPhoto, phoneNr, isEditing } = this.state;
    const idInt = parseInt(id);
    return (
      <View>
        { isEditing ?
          <EditContact
            id={idInt}
            name={name}
            thumbnailPhoto={thumbnailPhoto}
            phoneNr={phoneNr}
            onSave={this.onSave}
            takePhoto={() => this.takePhoto()}
            selectFromCameraRoll={() => this.selectFromCameraRoll()}
          />
        :
          <ContactDetail
            id={idInt}
            name={name}
            thumbnailPhoto={thumbnailPhoto}
            phoneNr={phoneNr}
          />
        }
      </View>
    );
  }
}

export default Details;
