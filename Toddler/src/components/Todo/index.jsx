import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import styles from './styles';

const TodoItem = ({
  id, name, color, onLongPress, isSelected, navigation: { navigate },
}) => (
  <TouchableOpacity onLongPress={() => onLongPress(id)} onPress={() => navigate('Tasks', { id })}>
    {
       isSelected
         ? <AntDesign name="checkcircleo" style={styles.checkmark} />
         : <></>
     }
    <View style={{ opacity: isSelected ? 0.5 : 1 }}>
      <View style={[styles.container, { backgroundColor: color }]}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onLongPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    dispatch: PropTypes.func,
  }).isRequired,
};

export default withNavigation(TodoItem);
