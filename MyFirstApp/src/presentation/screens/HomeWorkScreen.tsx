import React from 'react';
import {StyleSheet, View} from 'react-native';

export const HomeWorkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    // flex: 1,
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    alignSelf: 'flex-start',
  },
  blueBox: {
    backgroundColor: '#2CB9B0',
    // width: '100%',
    alignSelf: 'flex-end',
  },
});
