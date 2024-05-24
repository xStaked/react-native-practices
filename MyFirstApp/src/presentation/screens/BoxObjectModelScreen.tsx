import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Box Object Model</Text> */}

      <View style={styles.purpleBox}>
        <Text style={{color: 'white'}}>Box Object Model</Text>
      </View>
      <View style={styles.purpleBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 10,
    textAlign: 'center',
  },
  purpleBox: {
    // flex: 1,
    height: 30,
    backgroundColor: 'purple',
    // margin: 20,
    marginHorizontal: 20,
    marginVertical: 50,
    padding: 5,
  },
});
