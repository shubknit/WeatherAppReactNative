import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ForecastReducer from '../reducers/ForecastReducer';
import UserLocationReducer from '../reducers/UserLocationReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 export default () => {
	const store = createStore(
		combineReducers({
			foreCastData: ForecastReducer,
			userLocationData: UserLocationReducer
		}),
		composeEnhancers(applyMiddleware(thunk))
	)
	return store;

}