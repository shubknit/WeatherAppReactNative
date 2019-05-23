import React from 'react'
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { ForeCastList } from '../ForeCastList';
import  styles  from './styles';

const CurrentWeather = ({currentLocationData}) => {
  //const response = {"location":{"name":"Gurgaon","region":"Haryana","country":"India","lat":28.47,"lon":77.03,"tz_id":"Asia/Kolkata","localtime_epoch":1558432616,"localtime":"2019-05-21 15:26"},"current":{"last_updated_epoch":1558431911,"last_updated":"2019-05-21 15:15","temp_c":42.0,"temp_f":107.6,"is_day":1,"condition":{"text":"Mist","icon":"//cdn.apixu.com/weather/64x64/day/143.png","code":1030},"wind_mph":9.4,"wind_kph":15.1,"wind_degree":290,"wind_dir":"WNW","pressure_mb":1006.0,"pressure_in":30.2,"precip_mm":0.0,"precip_in":0.0,"humidity":15,"cloud":50,"feelslike_c":43.0,"feelslike_f":109.3,"vis_km":3.5,"vis_miles":2.0,"uv":9.0,"gust_mph":10.5,"gust_kph":16.9},"forecast":{"forecastday":[{"date":"2019-05-21","date_epoch":1558396800,"day":{"maxtemp_c":43.5,"maxtemp_f":110.3,"mintemp_c":34.9,"mintemp_f":94.8,"avgtemp_c":39.6,"avgtemp_f":103.3,"maxwind_mph":8.9,"maxwind_kph":14.4,"totalprecip_mm":0.0,"totalprecip_in":0.0,"avgvis_km":17.2,"avgvis_miles":10.0,"avghumidity":16.0,"condition":{"text":"Partly cloudy","icon":"//cdn.apixu.com/weather/64x64/day/116.png","code":1003},"uv":12.0},"astro":{"sunrise":"05:29 AM","sunset":"07:09 PM","moonrise":"09:36 PM","moonset":"07:25 AM"}},{"date":"2019-05-22","date_epoch":1558483200,"day":{"maxtemp_c":41.3,"maxtemp_f":106.3,"mintemp_c":35.8,"mintemp_f":96.4,"avgtemp_c":38.9,"avgtemp_f":102.1,"maxwind_mph":12.8,"maxwind_kph":20.5,"totalprecip_mm":1.0,"totalprecip_in":0.04,"avgvis_km":19.7,"avgvis_miles":12.0,"avghumidity":19.0,"condition":{"text":"Heavy rain at times","icon":"//cdn.apixu.com/weather/64x64/day/305.png","code":1192},"uv":11.1},"astro":{"sunrise":"05:28 AM","sunset":"07:09 PM","moonrise":"10:28 PM","moonset":"08:15 AM"}},{"date":"2019-05-23","date_epoch":1558569600,"day":{"maxtemp_c":42.2,"maxtemp_f":108.0,"mintemp_c":34.2,"mintemp_f":93.6,"avgtemp_c":39.3,"avgtemp_f":102.7,"maxwind_mph":11.2,"maxwind_kph":18.0,"totalprecip_mm":0.3,"totalprecip_in":0.01,"avgvis_km":19.5,"avgvis_miles":12.0,"avghumidity":21.0,"condition":{"text":"Patchy rain possible","icon":"//cdn.apixu.com/weather/64x64/day/176.png","code":1063},"uv":12.1},"astro":{"sunrise":"05:28 AM","sunset":"07:10 PM","moonrise":"11:16 PM","moonset":"09:08 AM"}},{"date":"2019-05-24","date_epoch":1558656000,"day":{"maxtemp_c":43.2,"maxtemp_f":109.8,"mintemp_c":35.7,"mintemp_f":96.3,"avgtemp_c":39.6,"avgtemp_f":103.2,"maxwind_mph":11.9,"maxwind_kph":19.1,"totalprecip_mm":0.0,"totalprecip_in":0.0,"avgvis_km":19.9,"avgvis_miles":12.0,"avghumidity":19.0,"condition":{"text":"Partly cloudy","icon":"//cdn.apixu.com/weather/64x64/day/116.png","code":1003},"uv":11.2},"astro":{"sunrise":"05:28 AM","sunset":"07:10 PM","moonrise":"11:59 PM","moonset":"10:01 AM"}},{"date":"2019-05-25","date_epoch":1558742400,"day":{"maxtemp_c":43.2,"maxtemp_f":109.8,"mintemp_c":35.8,"mintemp_f":96.4,"avgtemp_c":40.0,"avgtemp_f":104.0,"maxwind_mph":14.5,"maxwind_kph":23.4,"totalprecip_mm":0.0,"totalprecip_in":0.0,"avgvis_km":19.5,"avgvis_miles":12.0,"avghumidity":14.0,"condition":{"text":"Partly cloudy","icon":"//cdn.apixu.com/weather/64x64/day/116.png","code":1003},"uv":11.6},"astro":{"sunrise":"05:27 AM","sunset":"07:11 PM","moonrise":"No moonrise","moonset":"10:55 AM"}}]}};
  //const currentLocationData = response;
 // const { forecastdays } = response.forecast;
  const { forecastday} = currentLocationData.forecast; 
  return (
    <View style = {styles.mainContainer}>
      <View> 
        <Text style = {styles.locationText}> {currentLocationData.location.name}</Text>
      </View>
      <View>
       <Text style = {styles.tempText}> {currentLocationData.current.temp_c } &#8451;</Text>
       <Text style = {styles.conditionText}> {currentLocationData.current.condition.text} </Text>
      </View>
      <View style = {styles.foreCastContainer}>
        <ForeCastList foreCastData = { forecastday }/>
       </View>
      </View>
  )
}



const mapStateToProps = (state) => {
  return {
    currentLocationData: state.foreCastData
  }
}

export default connect(mapStateToProps)(CurrentWeather);
