import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import AddModal from '../../components/AddModal';
import { addImage, getAllImages } from '../../services/fileService';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import data from '../../services/dataService.js';
import Add from '../Add/index';

class Boards extends React.Component {
  state = {
    boards: data.boards,
    selectedBoards: [],
    isAddModalOpen: false,
    loadingImages: false,
  }
  async componentDidMount() {
    await this._fetchItems();
  }
  async _fetchItems() {
    this.setState({ loadingImages: true});
    const images = await getAllImages();
    this.setState({ images, loadingImages: false });
  }
  onBoardLongPress(id) {
    const { selectedBoards } = this.state;
    if (selectedBoards.indexOf(id) !== -1) {
      // If it's not -1 then the board is already within the list
      this.setState({
        selectedBoards: selectedBoards.filter(board => board !== id)
      });
    } else {
      // The board is not in the list so it needs to be addes
      this.setState({
        selectedBoards: [ ...selectedBoards, id ]
      });
    }
  }
  displayCaption() {
    const { selectedBoards } = this.state;
    if (selectedBoards.length == 0) { return; }

    let itemCaption = 'Boards';
    if (selectedBoards.length === 1) {
      itemCaption = 'Board'
    }
    return <Text style={{
      fontWeight: 'bold',
      fontSize: 15,
      marginLeft: 20,
      marginTop: 20,
      marginBottom: 5,
    }}>{selectedBoards.length} {itemCaption} selected</Text>
  }
  async takePhoto() {
    const photo = await takePhoto();
    if (photo.length > 0) {
      await this.addImage(photo);
    }
  }
  async selectFromCameraRoll() {
    const photo = await selectFromCameraRoll();
    if (photo.length > 0) {
      await this.addImage(photo);
    }
  }
  async addImage(imageLocation) {
    console.log(imageLocation);
    this.setState({ loadingImages: true });
    const newImage = await addImage(imageLocation);
    const { images } = this.state;
    this.setState({
      images: [ ...images, newImage ],
      isAddModalOpen: false,
      loadingImages: false,
    });
  }

  onSelectedDelete() {
    const { selectedBoards, boards } = this.state;
    this.setState({
      boards: boards.filter(board => selectedBoards.indexOf(board.id) === -1),
      selectedBoards: []
    })
  }

  editItem() {
    const { selectedBoards, boards } = this.state;
    const { navigation } = this.props;
    let id = selectedBoards[0];
    let index = boards.findIndex((obj => obj.id === id));
    let item = boards[index];
    this.state.selectedBoards = [];
    navigation.navigate('Edit', { 'type': 'board', 'currentId': id, currentItem: item });
  }

  addItem() {
    const { navigation } = this.props;
    navigation.navigate('Add', { 'type': 'board' });
  }

  render() {
    const { selectedBoards, boards, isAddModalOpen } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          /*onAdd={() => this.setState({ isAddModalOpen: true })}*/
          onAdd={() => this.addItem()}
          onRemove={() => this.onSelectedDelete()}
          hasSelectedItems={selectedBoards.length > 0}
          hasOneItem={selectedBoards.length === 1}
          onEdit={() => this.editItem()}
         />
        { this.displayCaption() }
        <BoardList
          onLongPress={(id) => this.onBoardLongPress(id)}
          boards={boards}
          selectedBoards={selectedBoards} />
        <AddModal
          isOpen={isAddModalOpen}
          closeModal={() => this.setState({
            isAddModalOpen: false
          })}
          takePhoto={() => this.takePhoto()}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
        />
      </View>
    )
  }
};

export default Boards
