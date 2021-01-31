import React from 'react';
import {
  View, Text, TouchableOpacity, Linking,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import { formatDate } from '../../services/formatService';
import { fontColor } from '../../styles/colors';

const Showtimes = ({ schedule, theatre, date=(new Date()) }) => (
  <View style={styles.showtimes}>
    <Text style={{
      alignSelf: 'center', fontSize: 24, paddingBottom: 10, color: fontColor,
    }}
    >
      Sýningar
    </Text>
    {
      schedule.map((show, key) => (
        <View key={key} style={styles.showtimeWrap}>
          <View style={[styles.column, styles.left]}>
            <Text style={{ color: fontColor }}>{theatre}</Text>
            <Text style={{ color: fontColor }}>{formatDate(date)}</Text>
          </View>
          <View style={[styles.column, styles.middle]}>
            <Text style={{ fontSize: 20, color: fontColor }}>{show.time}</Text>
          </View>
          <View style={[styles.column, styles.right]}>
            <TouchableOpacity onPress={() => Linking.openURL(show.purchase_url)}>
              <Text style={[{ color: fontColor }, styles.rightText]}>Kaupa miða</Text>
              <AntDesign style={styles.rightArrow} name="right" />
            </TouchableOpacity>
          </View>
        </View>
      ))
    }
  </View>
);

export default Showtimes;
