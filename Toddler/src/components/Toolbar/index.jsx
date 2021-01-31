import React from 'react';
import PropTypes from 'prop-types';
import { EvilIcons } from '@expo/vector-icons';
import { View, TouchableHighlight, Alert } from 'react-native';
import styles from './style';
import { cerise } from '../../styles/colors';

const Toolbar = ({
  onAdd, onEdit, onRemove, hasSelectedItems, hasOneItem,
}) => (
  <View styleName="horizontal" style={styles.toolbar}>

    <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
      <EvilIcons style={styles.icon} name="plus" />
    </TouchableHighlight>

    <TouchableHighlight style={styles.toolbarAction} onPress={onEdit} disabled={!hasOneItem}>
      <EvilIcons style={[styles.icon, hasOneItem ? { color: 'black' } : { color: 'rgba(155, 155, 155, 0.5)' }]} name="pencil" />
    </TouchableHighlight>

    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={() => {
        Alert.alert(
          'Are you sure you want to delete?',
          ':(',
          [
            { text: 'Cancel', style: 'cancel', onPress: () => {} },
            { text: 'Delete', style: 'destructive', onPress: () => onRemove() },
          ],
          { cancelable: false },
        );
      }}
      disabled={!hasSelectedItems}
    >
      <EvilIcons style={[styles.icon, hasSelectedItems ? { color: cerise } : { color: 'rgba(155, 155, 155, 0.5)' }]} name="trash" />
    </TouchableHighlight>

  </View>
);

Toolbar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  hasSelectedItems: PropTypes.bool.isRequired,
  hasOneItem: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Toolbar;
