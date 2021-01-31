import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, ScrollView, LogBox, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import data from '../../resources/data.json';
import styles from './styles';
import Toolbar from '../../components/Toolbar';
import logo from '../../resources/checklist.png';

class Edit extends React.Component {
  state = {
    type: 'list',
    tasks: data.tasks,
    lists: data.lists,
    boards: data.boards,
    currentId: -1,
    colors: ['#FFFFFF', '#CCCCCC', '#f4e3c8', '#efff9f', '#7fffcf', '#cf6fcf', '#cfff8f', '#cf1020', '#fbc028', '#2863fb', '#fb6828', '#ff6f6f'],
    photos: [
      'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
      'https://hbr.org/resources/images/article_assets/2019/06/Jun19_05_1040477378.jpg',
      'https://www.holland.com/upload_mm/8/e/3/56406_fullimage_dutch%20flag.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/61fq9A8jEGL._SL1500_.jpg',
      'https://artisangalway.com/wp-content/uploads/2018/10/Materialize-an-ideal-Party.jpg',
      'https://www.radissonhotelgroup.com/uploads/Asia%20Pacific/Image%20-%20Radisson%20Blu%20Resort%20Maldives%20Opens.jpg',
      'https://i0.wp.com/focusforwardcc.com/wp-content/uploads/Angry-Man_rs.jpg',
      'https://www.scotsman.com/webimg/b25lY21zOjEwNTE0NTg2LWUxM2MtNDAxNi04N2JhLTBkODQ2MGY5MjQ3ZDo4ZTljYzY0NC0xNmViLTQ3YTAtYmJjMi0zOTliODAzMjQ1NjU=.jpg',
      'https://www.androidcentral.com/sites/androidcentral.com/files/article_images/2020/03/cleaning-supplies-shutterstock.jpg'
    ],

    name: '',
    description: '',
    isFinished: false,
    listId: 0,
    boardId: 0,
    newColor: '#b33b3b',
    thumbnailPhoto: logo,
  };

  async componentDidMount(){
    const { navigation } = this.props;
    const type = navigation.getParam('type', '');
    const currentId = navigation.getParam('currentId', -1);
    const currentItem = navigation.getParam('currentItem', {})
    /*const type = 'board';
    const currentId = 1;
    const currentItem = {
      'id': 1,
      'name': 'prufu nafn',
      'description': 'upplýsingar um taskið',
      'listId': 1,
      'boardId': 1,
      'color': '#f08135',
      'thumbnailPhoto': 'https://images-na.ssl-images-amazon.com/images/I/61fq9A8jEGL._SL1500_.jpg'
    }*/

    if (type == 'task') this.presetTask(currentItem.name, currentItem.description, currentItem.listId)
    if (type == 'list') this.presetList(currentItem.name, currentItem.color, currentItem.boardId)
    if (type == 'board') this.presetBoard(currentItem.name, currentItem.thumbnailPhoto)

    // FlatList shouldn't be inside a scrollview but we've disabled the scrolling
    // feature of the flatlist so there are no conflicts, ignoring warning
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

    this.setState({
      currentId: currentId,
      type: type
    });
  }

  presetTask(name, description, listId) {
    this.setState({
      name: name,
      description: description,
      listId: listId
    });
  }

  presetList(name, color, boardId) {
    this.setState({
      name: name,
      newColor: color,
      boardId: boardId
    });
  }

  presetBoard(name, thumbnailPhoto) {
    this.setState({
      name: name,
      thumbnailPhoto: thumbnailPhoto
    });
  }

  changeColor(color) {
    this.setState({
      newColor: color
    })
  }

  changePhoto(photo) {
    this.setState({
      thumbnailPhoto: photo
    })
  }

  save() {
    const { currentId, type } = this.state;
    const { navigation } = this.props;
    if (type == 'list') {
      const { lists, name, newColor, boardId } = this.state;
      let index = lists.findIndex((list => list.id === currentId));
      lists[index].name = name;
      lists[index].color = newColor;
      lists[index].boardId = boardId;
      navigation.navigate('TodoLists', { 'id': boardId });
    } else if ( type == 'task' ) {
      const { tasks, name, description, listId } = this.state;
      let index = tasks.findIndex((task => task.id === currentId));
      tasks[index].name = name;
      tasks[index].description = description;
      tasks[index].listId = listId;
      navigation.navigate('Tasks', { 'id': listId });
    } else if ( type == 'board' ) {
      const { boards, name, thumbnailPhoto } = this.state;
      let index = boards.findIndex((board => board.id === currentId));
      boards[index].name = name;
      boards[index].thumbnailPhoto = thumbnailPhoto;
      navigation.navigate('Boards')
    }
  }


  render() {
    const { tasks, lists, boards, type, colors, photos, name, description, newColor, thumbnailPhoto, listId, boardId } = this.state;

    return(

        <View style={{ flex: 1  }}>
          <View style={ styles.wrapper }>
            <ScrollView>
              <Text style={styles.title}>{name}</Text>

              <View style={ styles.field}>
                <Text style={styles.caption}>Name</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={(value) => this.setState({name: value})}
                  value={name}
                />
              </View>

              <View style={[styles.field, {display: type == 'task' ? 'flex' : 'none' }]}>
                <Text style={styles.caption}>Description</Text>
                <TextInput
                  style={[styles.textInput, {height: 75, textAlignVertical: "top"}]}
                  onChangeText={(value) => this.setState({description: value})}
                  value={description}
                  multiline={true}
                />
              </View>

              <View style={[ styles.field, {display: type == 'task' ? 'flex' : 'none' }]}>
                <Text style={styles.caption}>Task List</Text>
                <FlatList
                  numColumns={1}
                  data={lists}
                  scrollEnabled= {false}
                  renderItem={({ item: { id, name, color } }) => (
                    <TouchableOpacity
                      onPress={() => this.setState({listId: id})}
                      >
                      <Text style={[{ backgroundColor: color }, styles.item]}>
                        {name}
                        {
                          id == listId
                            ? <AntDesign name="check" style={styles.checkmarkList} />
                            : <></>
                        }
                      </Text>

                    </TouchableOpacity>
                  )}
                  keyExtractor={(list) => list.id}
                />
              </View>

              <View style={[ styles.field, {display: type == 'list' ? 'flex' : 'none' }]}>
                <Text style={styles.caption}>Board</Text>
                <FlatList
                  numColumns={1}
                  data={boards}
                  renderItem={({ item: { id, name } }) => (
                    <TouchableOpacity
                      onPress={() => this.setState({boardId: id})}
                      >
                      <Text style={[styles.item, {backgroundColor: '#dddddd'}]}>
                        {name}
                        {
                          id == boardId
                            ? <AntDesign name="check" style={styles.checkmarkList} />
                            : <></>
                        }
                      </Text>

                    </TouchableOpacity>
                  )}
                  keyExtractor={(board) => board.id}
                />
              </View>

              <View style={[ styles.field, {display: type == 'list' ? 'flex' : 'none' }]}>
                <Text style={styles.caption}>Color</Text>
                <View style={styles.colorWrap}>
                  <FlatList
                    numColumns={4}
                    data={colors}
                    renderItem={({ item: color }) => (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => this.changeColor(color)}
                        >
                        <View style={[{ backgroundColor: color }, styles.color ]}>
                          {
                            newColor == color
                              ? <AntDesign name="checkcircleo" style={styles.checkmarkColor} />
                              : <></>
                          }

                        </View>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(color) => color}
                  />
                </View>
              </View>

              <View style={[ styles.field, {display: type == 'board' ? 'flex' : 'none' }]}>
                <Text style={styles.caption}>Thumbnail Photo</Text>
                <View style={styles.photoWrap}>
                  <FlatList
                    numColumns={3}
                    data={photos}
                    renderItem={({ item: photo }) => (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => this.changePhoto(photo)}
                        >
                        <Image source={{ uri: photo }} style={[styles.photo, { borderColor: '#2863fb', borderWidth: thumbnailPhoto == photo ? 3 : 0 }]}/>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(photo) => photo}
                  />
                </View>
              </View>

              <View style={styles.actionWrapper}>
                <View style={styles.actionWrapper}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => this.save()}
                  >
                    <Text style={styles.actionButton}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

    )
  }
}
 export default Edit;
