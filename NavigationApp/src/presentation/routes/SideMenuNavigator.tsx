import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {colors} from '../theme/theme';
import {View, useWindowDimensions} from 'react-native';
import {BottomTabNavigator} from './BottonTabsNavigator';
import {IonIcon} from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDraweContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: '#fff',
        drawerInactiveBackgroundColor: colors.primary,
        drawerItemStyle: {
          borderRadius: 10,
          paddingHorizontal: 10,
        },
      }}>
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen
        name="Tabs"
        options={{
          drawerIcon: () => <IonIcon name="home" size={20} color="#fff" />,
        }}
        component={BottomTabNavigator}
      />
      <Drawer.Screen
        name="Profile"
        options={{
          drawerIcon: () => <IonIcon name="person" size={20} color="#fff" />,
        }}
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

const CustomDraweContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: colors.primary,
          margin: 30,
          borderRadius: 50,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
