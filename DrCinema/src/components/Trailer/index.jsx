import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';
import styles from './styles';
import { fontColor } from '../../styles/colors';

const Trailer = ({ url, title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      {title}
    </Text>
    <WebView
      source={{ uri: url }}
      useWebKit
      javaScriptEnabled
      domStorageEnabled
      androidHardwareAccelerationDisabled
      startInLoadingState
      scalesPageToFit
      style={{ width: 350, height: 197 }}
    />
  </View>
);

export default Trailer;
