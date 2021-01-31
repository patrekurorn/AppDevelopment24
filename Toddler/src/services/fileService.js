import * as FileSystem from 'expo-file-system';

const imageDirectory = `${FileSystem.documentDirectory}image`;

export const copyFile = async (file, newLocation) => FileSystem.copyAsync({
  from: file,
  to: newLocation,
});

export const remove = async (name) => FileSystem.deleteAsync(`${imageDirectory}/${name}`, {
  idempotent: true,
});

const loadImage = async (fileName) => FileSystem.readAsStringAsync(`${imageDirectory}/${fileName}`, {
  encoding: FileSystem.EncodingType.Base64,
});

export const addImage = async (imageLocation) => {
  const folderSplit = imageLocation.split('/');
  const fileName = folderSplit[folderSplit.length - 1];
  await copyFile(imageLocation, `${imageLocation}/${fileName}`);

  return {
    // url: fileName,
    name: fileName,
    file: await loadImage(fileName),
  };
};

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(imageDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(imageDirectory);
  }
};

export const getAllImages = async () => {
  // Check if directory exists
  await setupDirectory();

  const result = await FileSystem.readDirectoryAsync(imageDirectory);
  return Promise.all(result.map(async (fileName) => ({
    // url: fileName,
    name: fileName,
    file: await loadImage(fileName),
  })));
};
