import React from 'react';
import { View, Text } from 'react-native';
import { fontColor } from '../../styles/colors';

const ImdbRating = ({ rating }) => {
  if (typeof rating !== 'undefined') {
    return (
      <View>
        <Text style={{ color: fontColor, marginTop: 17 }}>{ rating }</Text>
      </View>
    )
  }
  return (<View />);
};

export default ImdbRating;
