import * as actionTypes from "./actionTypes";
const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        cityName: action.data.city_name,
        weatherIconCode: action.data.weather.icon,
        temperature: action.data.temp
      };
    default:
      return state;
  }
};

export default reducer;
