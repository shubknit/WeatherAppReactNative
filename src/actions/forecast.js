import  { getWeatherData } from '../services/weatherAPI';
import { weatherAPIDetails } from '../constants/apiConfig';

const setForeCastData = (foreCastData) => ({
	type: 'SET_FORECAST_DATA',
	foreCastData
})


export const startSetForeCastData = (location, navigate) => {
	return async (dispatch) => {
		try {
			let response = await getWeatherData(location);
			const { data } = response;
		    dispatch(setForeCastData(data));
			navigate('ForeCastScreen');
		}
		catch (e) {
			console.log('error in fetching', e);
		}
	}
}

