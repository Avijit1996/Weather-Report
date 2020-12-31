import {http} from '../http';

const getCountry = (inp, navigation) => (dispatch) => {
  return http
    .get(`https://restcountries.eu/rest/v2/name/${inp}`)
    .then((country) => {
      console.log(country);
      dispatch({
        type: 'SET_COUNTRY',
        data: country,
      });
      navigation.navigate('Country');
    });
};

const getCountryDetails = (capital, navigation) => (dispatch) => {
  return http
    .get(
      `http://api.weatherstack.com/current?access_key=da67de99bcbac91cc86c4de311d5013a&query=${capital}`,
    )
    .then((weather) => {
      console.log(weather.data);
      dispatch({
        type: 'SET_WEATHER',
        data: weather,
      });
      navigation.navigate('Weather');
    });
};

export {getCountry, getCountryDetails};
