import * as FileSystem from 'expo-file-system';
import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';
// bla
const contactsDirectory = `${FileSystem.documentDirectory}contacts`;
const imageDirectory = `${FileSystem.documentDirectory}image`;
const tempDir = FileSystem.documentDirectory;

export const copyFile = async (file, newLocation) => FileSystem.copyAsync({
  from: file,
  to: newLocation,
});

export const loadImage = async (fileName) => await FileSystem.readAsStringAsync(`${imageDirectory}/${fileName}`, {
  encoding: FileSystem.EncodingType.Base64,
});

export const addImage = async (imageLocation) => {
  const folderSplit = imageLocation.split('/');
  const fileName = folderSplit[folderSplit.length - 1];

  await setupImageDirectory();

  await copyFile(imageLocation, `${imageDirectory}/${fileName}`);
  // console.log(await FileSystem.readDirectoryAsync(contactsDirectory));
  return {
    // url: fileName,
    name: fileName,
    file: await loadImage(fileName),
  };
};

export const remove = async (name) => FileSystem.deleteAsync(`${contactsDirectory}/${name}`, {
  idempotent: true,
});

export const removeTemp = async () => FileSystem.deleteAsync(`${contactsDirectory}`, {
  idempotent: true,
});

const loadContact = async (fileName) => FileSystem.readAsStringAsync(`${contactsDirectory}/${fileName}`, {
  encoding: FileSystem.EncodingType.UTF8,
});

function nameToUri(name) {
  const validString = name.toString().replace(/\s/g, '');
  return validString.replace(/[^A-Za-z0-9\s]/g, '');
}

export const removeContact = async (id, name) => {
  const fileName = `${nameToUri(name)}-${nameToUri(id)}.json`;
  remove(fileName);
};

// Takes an object of contact information as a parameter and returns the object back
export const addContact = async (newContact) => {
  const fileName = `${nameToUri(newContact.name)}-${nameToUri(newContact.id)}.json`;
  FileSystem.writeAsStringAsync(
    `${contactsDirectory}/${fileName}`,
    JSON.stringify(newContact),
    { encoding: FileSystem.EncodingType.UTF8 },
  );
  return await loadContact(fileName);
};

export const editContact = async (contact, id, name) => {
  console.log(contact.name, contact.id, " -- ", id, name);
  const oldFile = `${nameToUri(name)}-${nameToUri(id)}.json`;
  remove(oldFile);
  return addContact(contact);
};

const setupContactDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactsDirectory);
  if (!dir.exists) {
    //addContact();
    await FileSystem.makeDirectoryAsync(contactsDirectory);
  }
};

const setupImageDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(imageDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(imageDirectory);
  }
}

export const getAllContacts = async () => {
  // Check if directory exists
  await setupContactDirectory();

  const result = await FileSystem.readDirectoryAsync(contactsDirectory);
  return Promise.all( result.map(async (content) => JSON.parse(await loadContact(content))));
  /* console.log(allContacts);
  return Promise.all(allContacts.map(async (contact) => ({
    contact: JSON.parse(contact),
  }))); */
};

function getContactsOS(content) {
  // console.log(content);
  const contacts = [];
  let contactOS = {};
  for (let i = 1; i < content.length; i += 1) {
    contactOS.name = content[i].name;
    if (content[i].phoneNumbers !== undefined) {
      const phoneNr = content[i].phoneNumbers[0].number.toString().replace(/[^0-9]/g, '');
      contactOS.phoneNr = phoneNr;
      contactOS.id = parseInt(phoneNr);
    } else {
      contactOS.phoneNr = '';
    }
    if (content[i].imageAvailable === true) {
      contactOS.thumbnailPhoto = content[i].image.uri;
    } else {
      contactOS.thumbnailPhoto = 'https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png';
    }
    contacts.push(contactOS);
    // console.log(contacts);
    contactOS = {};
  }
  return contacts;
}

export const getAllContactsFromOS = async () => {
  await setupContactDirectory();
  let contactsOS = [];
  const { status } = await Contacts.requestPermissionsAsync();
  if (status === 'granted') {
    await Contacts.getContactsAsync({
      fields: [
        Contacts.Fields.Name,
        Contacts.Fields.PhoneNumbers,
        Contacts.Fields.Image,
      ],
    }).then((response) => {
      // console.log(response);
      contactsOS = (getContactsOS(response.data));
      contactsOS.map(async (contact) => { await addContact(contact); });
    });
  }
  const result = await FileSystem.readDirectoryAsync(contactsDirectory);
  return Promise.all(result.map(async (fileName) => JSON.parse(await loadContact(fileName))));
};
