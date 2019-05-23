import axios from 'axios';
import { weatherAPIDetails, foreCastDay } from '../constants/apiConfig';

export const getWeatherData = async (place) => {
  const url = weatherAPIDetails.baseURL + weatherAPIDetails.route
              + '?' + weatherAPIDetails.params + place + '&days=' + foreCastDay;
  const response = await axios.get(url);
  console.log('api repsonse', response);
  return response;
}



