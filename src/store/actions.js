import * as actionTypes from "./actionTypes";
import { getData } from "../API/Weatherbit";

export const fetchData = city => {
  return dispatch => {
    getData(city)
      .then(response => {
        console.log(response);
        dispatch(fetchDataSuccess(response));
      })
      .catch(error => {
        dispatch(fetchDataFAIL());
        console.error("Action Error:", error);
      });
  };
};

export const fetchDataSuccess = data => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    data: data
  };
};
export const fetchDataFAIL = err => {
  return {
    type: actionTypes.FETCH_DATA_FAIL
  };
};
export const clearStore = () => {
  return { type: actionTypes.CLEAR_STORE };
};

export const changeHowtoUseVisibility = () => {
  console.log("changeHowtoUseVisibility");
  return { type: actionTypes.CHANGE_HOW_TO_USE_VISIBILITY };
};
