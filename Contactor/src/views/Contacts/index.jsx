import React from 'react';
import { View, Text, TouchableOpacity, Button, TextInput, LogBox } from 'react-native';
import ContactsList from '../../components/ContactsList';
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/Footer';
import { Feather } from '@expo/vector-icons';
import { getAllContacts, addContact, deleteContact, remove, getAllContactsFromOS } from '../../services/fileService';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import { NavigationEvents, withNavigation } from 'react-navigation';

class Contacts extends React.Component {
  state = {
    contacts: [],
    loadingContacts: false,
    search: '',
    searchedContacts: [],
    importPressed: false,
  }

  async componentDidMount() {
    const { contacts } = this.state;
    await this._fetchItems();
  }

  async _fetchItems() {
    // Ignore warnings for Swipeout library (warning has no affect on functionality)
    LogBox.ignoreLogs(['componentWillMount has been renamed']);
    LogBox.ignoreLogs(['componentWillReceiveProps has been renamed']);

    this.setState({ loadingContacts: true});
    const contacts = await getAllContacts();
    this.setState({
      contacts: contacts,
      searchedContacts: contacts,
      loadingContacts: false,
    });
    // console.log(contacts);
  }

  async getContactsFromOS() {
    this.setState({ loadingContacts: true, importPressed: true });
    const contactsOS = await getAllContactsFromOS();
    this.setState({
      contacts: contactsOS,
      searchedContacts: contactsOS,
      loadingContacts: false,
    });
  }

  reload() {
    this._fetchItems();
  }

  searchContacts(search) {
    const { contacts } = this.state;
    const searchedContacts = contacts.filter(function (item) {
      const itemData = item.name.toUpperCase();
      const searchData = search.toUpperCase();
      return itemData.includes(searchData);
    });
    this.setState({
      searchedContacts: searchedContacts,
      search: search,
    });
  }

  sortContacts(searchedContacts) {
    const sortedContacts = searchedContacts.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1);
    return sortedContacts;
  }

  async getContacts() {
    const contacts = await getAllContacts();
    return contacts;
  }

  async addContact() {
    const tempContact = JSON.parse(`{
      "id": 7,
      "name": "Binni blöa",
      "thumbnailPhoto": "https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg"
    }`);
    console.log(tempContact)
    const newContact = JSON.parse(await addContact(tempContact));
    const { contacts } = this.state;
    this.setState({
      contacts: [ ...contacts, newContact ],
    })
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('AddContact')}
          >
          <Feather style={{ fontSize: 24 }} name='plus' />
        </TouchableOpacity>
      ),
      headerRightContainerStyle: {
        paddingRight: 10
      }
    };
  };

  render() {
    const { contacts, loadingContacts, search, searchedContacts, importPressed } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <NavigationEvents onWillFocus={() => this._fetchItems()}/>
        {/*{ loadingContacts ? <Text>Loading</Text> : <></>}*/}
        <SearchBar search={search} onSearch={(search) => this.searchContacts(search)} />
        <ContactsList
          contacts={this.sortContacts(searchedContacts)}
          reload={() => this.reload()}
        />
        <Footer
          contactsOS={() => this.getContactsFromOS()}
          importPressed={importPressed}
        />
        {/*<TouchableOpacity
          activeOpacity={0.8}
          onPress={() => getAllContacts()}>
          <Text>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.log( contacts )}>
          <Text>Print contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => this.addContact()}>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => deleteContact("Binnibla-7.json")}>
          <Text>Delete</Text>
        </TouchableOpacity>*/}
      </View>
    )
  }
};

export default Contacts;
