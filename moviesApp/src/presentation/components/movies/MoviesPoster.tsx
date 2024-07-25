import {View, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Movie} from '../../../core/entities/movie.entity';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/StackNavigator';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export default function MoviesPoster({
  movie,
  height = 420,
  width = 300,
}: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable
      onPress={() => navigation.navigate('Details', {movieId: movie.id})}
      style={pressed => ({
        width,
        height,
        marginHorizontal: 10,
        paddingBottom: 20,
        paddingHorizontal: 7,
        opacity: pressed ? 0.9 : 1,
      })}>
      <View style={{...styles.imageContainer, width: 300, height: 400}}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster}`}}
          style={styles.image}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
});
