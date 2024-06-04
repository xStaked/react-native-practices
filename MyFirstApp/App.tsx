import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
// import {HelloWordlScreen} from './src/presentation/screens/HelloWordlScreen';
// import {CounterScreeen} from './src/presentation/screens/CounterScreeen';
// import {CounterM3Screeen} from './src/presentation/screens/CounterM3Screeen';

import IonIcon from 'react-native-vector-icons/Ionicons';
import {HomeWorkScreen} from './src/presentation/screens/HomeWorkScreen';
// import {FlexDirectionScreen} from './src/presentation/screens/FlexDirectionScreen';
// import {BoxObjectModelScreen} from './src/presentation/screens/BoxObjectModelScreen';
// import {DimensionScreen} from './src/presentation/screens/DimensionScreen';
// import {PositionScreen} from './src/presentation/screens/PositionScreen';
// import {FlexScreen} from './src/presentation/screens/FlexScreen';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWordlScreen /> */}
        {/* <CounterScreeen /> */}
        {/* <CounterM3Screeen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        {/* <FlexDirectionScreen /> */}
        <HomeWorkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
