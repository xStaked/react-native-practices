import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
// import {HelloWordlScreen} from './src/presentation/screens/HelloWordlScreen';
// import {CounterScreeen} from './src/presentation/screens/CounterScreeen';
import {CounterM3Screeen} from './src/presentation/screens/CounterM3Screeen';

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWordlScreen /> */}
        {/* <CounterScreeen /> */}
        <CounterM3Screeen />
      </SafeAreaView>
    </PaperProvider>
  );
};
