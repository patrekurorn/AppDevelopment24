import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import TodoItem from '../Todo';

const TodoList = ({
  todo, onLongPress, selectedTodoList, currentBoard,
}) => (
  <View style={{ flex: 1 }}>
    <FlatList
      numColumns={1}
      data={todo.filter((item) => item.boardId === currentBoard)}
      extraData={selectedTodoList}
      renderItem={({ item: { name, id, color } }) => (
        <TodoItem
          name={name}
          id={id}
          color={color}
          onLongPress={onLongPress}
          isSelected={selectedTodoList.indexOf(id) !== -1} // If in list then it's selected
        />
      )}
      keyExtractor={(todolist) => todolist.name}
    />
  </View>
);

TodoList.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
  onLongPress: PropTypes.func.isRequired,
  selectedTodoList: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentBoard: PropTypes.number.isRequired,
};

export default TodoList;
