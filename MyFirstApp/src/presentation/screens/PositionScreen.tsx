import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox} />
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'relative',
    position: 'absolute',
    // top: 150,
    bottom: 0,
  },
  orangeBox: {
    width: 150,
    height: 150,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    position: 'absolute',
    right: 0,
  },
  greenBox: {
    // width: 150,
    // height: 150,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#44BB4A',
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    // top: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
