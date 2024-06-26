import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {FlatList} from 'react-native-gesture-handler';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {type RootStackParams} from '../../routes/StackNavigator';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
  },
  {
    id: 4,
    name: 'Product 4',
    price: 400,
  },
  {
    id: 5,
    name: 'Product 5',
    price: 500,
  },
];

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10, fontSize: 30}}>Productos</Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            label={item.name}
            onPress={() =>
              navigation.navigate('Product', {
                id: item.id,
                name: item.name,
              })
            }
          />
        )}
      />
      <Text style={{marginBottom: 10, fontSize: 30}}>Ajustes</Text>

      <PrimaryButton
        label="Ajustes"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};
