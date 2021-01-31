import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
import Boards from '../views/Boards';
import TodoLists from '../views/TodoLists';
import Tasks from '../views/Tasks';
import Edit from '../views/Edit';
import Add from '../views/Add';

const StackNavigator = createStackNavigator({
  Main,
  Boards,
  TodoLists,
  Tasks,
  Edit,
  Add,
});

export default createAppContainer(StackNavigator);
