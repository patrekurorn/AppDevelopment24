import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import Task from '../Task';

const TaskList = ({
  tasks, onTaskFinished, onTaskSelect, selectedTasks, currentList,
}) => (
  <View style={{ flex: 1 }}>
    <FlatList
      numColumns={1}
      data={tasks.filter((item) => item.listId === currentList)}
      extraData={selectedTasks}
      renderItem={({
        item: {
          id, name, description, isFinished,
        },
      }) => (
        <Task
          id={id}
          name={name}
          description={description}
          isFinished={isFinished}
          onTaskFinished={onTaskFinished}
          onTaskSelect={onTaskSelect}
          isSelected={selectedTasks.indexOf(id) !== -1}
        />
      )}
      keyExtractor={(task) => task.name}
    />
  </View>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  onTaskFinished: PropTypes.func.isRequired,
  onTaskSelect: PropTypes.func.isRequired,
  selectedTasks: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentList: PropTypes.number.isRequired,
};

export default TaskList;
