import React from 'react';
import { View, Text } from 'react-native';
import data from '../../services/dataService.js';
import styles from './styles';
import TaskList from '../../components/TaskList';
import Toolbar from '../../components/Toolbar';
import { withNavigation } from 'react-navigation';

class Tasks extends React.Component {
  state = {
    tasks: data.tasks,
    selectedTasks: [],
    currentList: ''
  };

  async componentDidMount(){
    const { navigation } = this.props;
    const currentList = navigation.getParam('id', -1);
    let updatedTasks = navigation.getParam('tasks', []);
    if (updatedTasks.length === 0) updatedTasks = this.state.tasks;
    this.setState({
      currentList: currentList,
      tasks: updatedTasks
    });
  }

  onTaskFinished(id) {
    const { tasks } = this.state;
    let index = tasks.findIndex((obj => obj.id === id));
    tasks[index].isFinished = !tasks[index].isFinished;
    this.setState({
      tasks: tasks
    });
  };

  onTaskSelect(id) {
    const { selectedTasks } = this.state;
    if (selectedTasks.indexOf(id) !== -1) {
      this.setState({
        selectedTasks: selectedTasks.filter(tasks => tasks !== id)
      })
    } else {
      this.setState({
        selectedTasks: [...selectedTasks, id]
      })
    }
  }

  onSelectedDelete() {
    const { selectedTasks, tasks } = this.state
    this.setState({
      tasks: tasks.filter(task => selectedTasks.indexOf(task.id) === -1),
      selectedTasks: []
    })
  }

  editItem() {
    const { selectedTasks, tasks } = this.state;
    const { navigation } = this.props;
    let id = selectedTasks[0]
    let index = tasks.findIndex((obj => obj.id === id));
    let item = tasks[index];
    this.state.selectedTasks = [];
    navigation.navigate('Edit', { 'type': 'task', 'currentId': id, currentItem: item })
  }

  addItem() {
    const { currentList } = this.state;
    const { navigation } = this.props;
    navigation.navigate('Add', { 'type': 'task', 'listId': currentList})
  }

  displayCaption() {
    const { selectedTasks } = this.state;
    if (selectedTasks.length == 0) { return; }

    let itemCaption = 'Tasks';
    if (selectedTasks.length === 1) {
      itemCaption = 'Task'
    }
    return <Text style={{
      fontWeight: 'bold',
      fontSize: 15,
      marginLeft: 20,
      marginTop: 20,
      marginBottom: 5,
    }}>{selectedTasks.length} {itemCaption} selected</Text>
  }

  render() {
    const { selectedTasks, tasks, currentList } = this.state;

    return(
      <View style={{ flex: 1 }}>
        <Toolbar
          onRemove={() => this.onSelectedDelete() }
          hasSelectedItems={selectedTasks.length > 0}
          hasOneItem={selectedTasks.length === 1}
          onEdit={() => this.editItem()}
          onAdd={() => this.addItem()}
        />
        { this.displayCaption() }
        <TaskList
          tasks={ tasks }
          onTaskFinished={(taskId) => this.onTaskFinished(taskId)}
          onTaskSelect={(taskId) => this.onTaskSelect(taskId)}
          selectedTasks={selectedTasks}
          currentList={currentList}
        />
      </View>
    )
  }
}
 export default withNavigation(Tasks);
