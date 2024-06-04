import React from 'react';
import {StyleSheet, View} from 'react-native';

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'gray',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    gap: 10,
    columnGap: 15,
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: '#5856D6',
    // top: -100,
  },
  box2: {
    backgroundColor: '#5958a7',
    alignSelf: 'flex-end',
  },
  box3: {
    backgroundColor: '#7876e4',
    // top: 100,
    alignSelf: 'center',
  },
});
