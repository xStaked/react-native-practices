import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../config';
import {useProfileStore} from '../../store/profile-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {name} </Text>
      <Text style={styles.title}> {email} </Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({name: 'New name'})}>
        <Text style={styles.title}>Cambiar nombre</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({email: 'test@test2.com'})}>
        <Text style={styles.title}>Cambiar email</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => changeProfile('John Doe', 'john.doe@google.com')}>
        <Text style={styles.title}>Regresar a John Doe</Text>
      </Pressable>
    </View>
  );
};
