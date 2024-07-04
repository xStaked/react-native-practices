import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../config';
import {useCounterStore} from '../../store/counter-store';
import {useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const counter = useCounterStore(state => state.counter);
  const incrementBy = useCounterStore(state => state.incrementBy);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Settings ${counter}`,
    });
  }, [counter]);

  return (
    <View style={styles.container}>
      <Text>Counter: {counter}</Text>
      <Pressable style={styles.primaryButton} onPress={() => incrementBy(1)}>
        <Text style={styles.title}>+1</Text>
      </Pressable>
      <Pressable style={styles.primaryButton} onPress={() => incrementBy(-1)}>
        <Text style={styles.title}>-1</Text>
      </Pressable>
    </View>
  );
};
