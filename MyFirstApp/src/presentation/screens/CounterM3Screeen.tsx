import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../theme/global.styles';
import {FAB} from 'react-native-paper';

export const CounterM3Screeen = () => {
  const [count, setCount] = React.useState(0);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      <FAB
        label="+1"
        onPress={() => setCount(count + 1)}
        style={globalStyles.fab}
      />
    </View>
  );
};
