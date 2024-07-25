import {View} from 'react-native';
import React from 'react';
import {Movie} from '../../../core/entities/movie.entity';
import {ScrollView} from 'react-native-gesture-handler';
import MoviesPoster from './MoviesPoster';

interface Props {
  movies: Movie[];
  height?: number;
}

export default function PosterCarousel({height = 440, movies}: Props) {
  return (
    <View
      style={{
        height,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <MoviesPoster key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
}
