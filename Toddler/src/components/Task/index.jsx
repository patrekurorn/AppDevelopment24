import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import styles from './styles';

const Task = ({
  id, name, description, isFinished, onTaskFinished, onTaskSelect, isSelected,
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => onTaskFinished(id)}
    onLongPress={() => onTaskSelect(id)}
  >
    {
      isSelected
        ? <AntDesign name="checkcircleo" style={styles.checkmarkSelected} />
        : <></>
    }
    <View style={[styles.task, { opacity: isSelected ? 0.4 : 1 }]}>
      {
        isFinished
          ? <FontAwesome name="check-circle" style={styles.checkmarkDone} />
          : <FontAwesome name="circle-thin" style={styles.checkmarkDone} />
      }
      <View style={styles.taskOverlay} />
      <Text style={[styles.taskTitle, isFinished ? styles.taskFinished : {}]}>{ name }</Text>
      <Text style={[styles.taskDescription,
        isFinished ? styles.taskFinished : {}]}
      >
        { description }
      </Text>
      <View style={styles.taskBorder} />

    </View>
  </TouchableOpacity>
);

Task.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isFinished: PropTypes.bool.isRequired,
  onTaskFinished: PropTypes.func.isRequired,
  onTaskSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default Task;
