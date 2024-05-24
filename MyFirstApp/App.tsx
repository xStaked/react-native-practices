import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
// import {HelloWordlScreen} from './src/presentation/screens/HelloWordlScreen';
// import {CounterScreeen} from './src/presentation/screens/CounterScreeen';
import {CounterM3Screeen} from './src/presentation/screens/CounterM3Screeen';

import IonIcon from 'react-native-vector-icons/Ionicons';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWordlScreen /> */}
        {/* <CounterScreeen /> */}
        <CounterM3Screeen />
      </SafeAreaView>
    </PaperProvider>
  );
};
