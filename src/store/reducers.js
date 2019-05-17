import * as actionTypes from "./actionTypes";
const initialState = { showHowToUse: false };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        cityName: action.data.city_name,
        weatherIconCode: action.data.weather.icon,
        temperature: action.data.temp,
        weatherDescription: action.data.weather.description,
        cloudCoverage: action.data.clouds,
        humidity: action.data.rh,
        pressure: action.data.pres,
        wind: {
          windDirection: action.data.wind_cdir,
          windSpeed: action.data.wind_spd
        },
        error: false
      };
    case actionTypes.FETCH_DATA_FAIL:
      return { ...state, error: true };
    case actionTypes.CHANGE_HOW_TO_USE_VISIBILITY:
      return { ...state, showHowToUse: !state.showHowToUse };
    case actionTypes.CLEAR_STORE:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
