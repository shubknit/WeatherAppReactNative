/**
 * @format
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import configureStore  from './src/store/configureStore';





XMLHttpRequest = GLOBAL.originalXMLHttpRequest ? 
GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;


const store = configureStore();
store.subscribe(() => {
	console.log('state updated', store.getState());
	
})
class WeatherApp extends Component {
    render() {
        return (
            <Provider store = {store}> 
                <App/>
            </Provider>
        )
    }
}
AppRegistry.registerComponent('WeatherApp', () => WeatherApp);


