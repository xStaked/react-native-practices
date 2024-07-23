import {View, Text} from 'react-native';
import React from 'react';
import {useMovies} from '../../hooks/useMovies';

export default function HomeScreen() {
  const {} = useMovies();

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}
