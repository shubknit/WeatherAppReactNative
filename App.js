import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomePage from './src/components/HomePage';
import CurrentWeather  from './src/components/CurrentWeather';

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: () => ({
      title: 'Search Location',
    }),
  },
  ForeCastScreen: {
    screen: CurrentWeather,
    navigationOptions: () => ({
      title: 'Forecast',
    }),
  }

});

const App = createAppContainer(MainNavigator);

export default App;
