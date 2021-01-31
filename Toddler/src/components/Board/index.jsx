import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, View, Text, TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import styles from './styles';

const BoardItem = ({
  id, name, thumbnailPhoto, onLongPress, isSelected, navigation: { navigate },
}) => (
  <TouchableOpacity
    style={
    styles.eachBoard
}
    activeOpacity={0.8}
    onLongPress={() => onLongPress(id)}
    onPress={() => navigate('TodoLists', { id })}
  >
    {
      isSelected
        ? <AntDesign name="checkcircleo" style={styles.checkmark} />
        : <></>
    }
    <View style={{ opacity: isSelected ? 0.5 : 1 }}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: thumbnailPhoto }}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  </TouchableOpacity>
);

BoardItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnailPhoto: PropTypes.string.isRequired,
  onLongPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    dispatch: PropTypes.func,
  }).isRequired,
};

export default withNavigation(BoardItem);
