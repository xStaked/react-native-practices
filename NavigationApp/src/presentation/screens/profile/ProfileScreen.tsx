import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {DrawerActions, useNavigation} from '@react-navigation/native';

export const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        marginTop: top + 20,
        // justifyContent: 'center',
        // alignItems: 'center',
      }}>
      <Text>ProfileScreen</Text>
      <PrimaryButton
        label="Open Drawer"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
      />
    </View>
  );
};
