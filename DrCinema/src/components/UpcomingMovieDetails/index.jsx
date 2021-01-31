import React from 'react';
import {
  View, Text, Image, ScrollView,
} from 'react-native';
import styles from './styles';
import { cleanString } from '../../services/formatService';
import Trailer from '../Trailer';
import { fontColor } from '../../styles/colors';
import Genres from '../Genres';
import { POSTER_PLACEHOLDER } from '../../constants/index';

const UpcomingMovieDetails = ({ movie, trailers }) => (
  <ScrollView>
    <View style={styles.container}>
      <View style={styles.coverImageWrap}>
        <Image source={{ uri: movie.poster }} style={styles.coverImage} blurRadius={1} />
      </View>
      <View style={styles.detailsWrap}>
        { movie.poster === 'https://kvikmyndir.is/images/poster/' || movie.poster === ''
          ? (
            <Image source={{ uri: POSTER_PLACEHOLDER }} style={styles.posterImage} />
          )
          : (
            <Image source={{ uri: movie.poster }} style={styles.posterImage} />
          )}
        <View style={styles.headerDetailsWrap}>
          <View style={styles.headerDetails}>
            <Text style={styles.title}>{ movie.title }</Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Text style={{ width: 100, color: fontColor }}>{movie['release-dateIS']}</Text>
            </View>
          </View>
        </View>
        <View style={styles.bodyDetails}>
          <Text style={{ color: fontColor }}>{ cleanString(movie.plot) }</Text>
          <View style={styles.genresWrap}>
            <Genres genres={movie.genres} />
          </View>
        </View>
      </View>
      {
        trailers.map((t) => (
          <Trailer key={t.id} url={t.url} title={t.name} />
        ))
      }
      { trailers.length === 0
        ? (
          <Text style={styles.noTrailers}>Enginn trailer</Text>
        )
        : (
          <></>
        )}
    </View>
  </ScrollView>
);

export default UpcomingMovieDetails;
