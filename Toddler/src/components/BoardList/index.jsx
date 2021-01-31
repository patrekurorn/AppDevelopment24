import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import BoardItem from '../Board';
import styles from './styles';

const BoardList = ({
  boards, onLongPress, selectedBoards,
}) => (
  <View style={styles.list}>
    <FlatList
      numColumns={3}
      data={boards}
      extraData={selectedBoards}
      renderItem={({ item: { id, name, thumbnailPhoto } }) => (
        <BoardItem
          id={id}
          name={name}
          thumbnailPhoto={thumbnailPhoto}
          onLongPress={onLongPress}
          isSelected={selectedBoards.indexOf(id) !== -1}
        />
      )}
      keyExtractor={(board) => board.id}
    />
  </View>
);

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnailPhoto: PropTypes.string.isRequired,
  })).isRequired,
  onLongPress: PropTypes.func.isRequired,
  selectedBoards: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default BoardList;
