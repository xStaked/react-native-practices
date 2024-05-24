import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../theme/global.styles';
import {FAB} from 'react-native-paper';

// import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screeen = () => {
  const [count, setCount] = React.useState(0);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>

      {/* <Icon name="airplane" size={30} color="black" /> */}

      <FAB
        onPress={() => setCount(count + 1)}
        style={globalStyles.fab}
        icon="add"
        // icon={({size, color}) => {
        //   return <Icon name="add" size={size} color={color} />;
        // }}
      />
    </View>
  );
};
