import * as actionTypes from "./actionTypes";
import { getData } from "../API/Weatherbit";

export const fetchData = city => {
  return dispatch => {
    getData(city)
      .then(response => {
        console.log(response);
        dispatch(fetchDataSuccess(response));
      })
      .catch(error => console.error("Error:", error));
  };
};

export const fetchDataSuccess = data => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    data: data
  };
};
