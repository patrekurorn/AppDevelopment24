import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import TodoList from '../../components/TodoList';
import data from '../../services/dataService.js';

class TodoLists extends React.Component {
  state = {
    todoLists: data.lists,
    selectedTodoList: [],
    currentBoard: ''
  }

  async componentDidMount(){
    const { navigation } = this.props;
    const currentBoard = navigation.getParam('id', -1);
    this.setState({
      currentBoard: currentBoard
    });
  }

  onTodoListLongPress(id) {
    const { selectedTodoList } = this.state;
    if (selectedTodoList.indexOf(id) !== -1) {
      // Er til staðar
      this.setState({
        selectedTodoList: selectedTodoList.filter(todolist => todolist !== id)
      });
    } else {
      // The todo list needs to be added
      this.setState({
        selectedTodoList: [ ...selectedTodoList, id ]
      });
    }
  }

  onSelectedDelete() {
    const { todoLists, selectedTodoList } = this.state;
    this.setState({
      todoLists: todoLists.filter(todoList => selectedTodoList.indexOf(todoList.id) === -1),
      selectedTodoList: []
    })
  }

  editItem() {
    const { selectedTodoList, todoLists } = this.state;
    const { navigation } = this.props;
    let id = selectedTodoList[0]
    let index = todoLists.findIndex((obj => obj.id === id));
    let item = todoLists[index]
    this.state.selectedTodoList = [];
    navigation.navigate('Edit', { 'type': 'list', 'currentId': id, currentItem: item })
  }

  addItem() {
    const { currentBoard } = this.state;
    const { navigation } = this.props;
    navigation.navigate('Add', { 'type': 'list', 'boardId': currentBoard})
  }

  displayCaption() {
    const { selectedTodoList } = this.state;
    if (selectedTodoList.length == 0) { return; }

    let itemCaption = 'TodoLists';
    if (selectedTodoList.length === 1) {
      itemCaption = 'TodoList'
    }
    return <Text style={{
      fontWeight: 'bold',
      fontSize: 15,
      marginLeft: 20,
      marginTop: 20,
      marginBottom: 5,
    }}>{selectedTodoList.length} {itemCaption} selected</Text>
  }

  render() {
    const { todoLists, selectedTodoList, currentBoard } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onRemove={() => this.onSelectedDelete() }
          hasSelectedItems={selectedTodoList.length > 0}
          hasOneItem={selectedTodoList.length === 1}
          onEdit={() => this.editItem()}
          onAdd={() => this.addItem()}
        />
        { this.displayCaption() }
        <TodoList
          onLongPress={(id) => this.onTodoListLongPress(id)}
          todo={todoLists}
          selectedTodoList={selectedTodoList}
          currentBoard={currentBoard}
        />
      </View>
    );
  }
}

export default TodoLists;
