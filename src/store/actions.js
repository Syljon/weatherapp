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
// export const authSuccess = (token, userId, userEmail) => {
//   return {
//     type: actionTypes.AUTH_SUCCESS,
//     token: token,
//     userId: userId,
//     userEmail: userEmail
//   };
// };

// export const authFail = error => {
//   return {
//     type: actionTypes.AUTH_FAIL,
//     error: error
//   };
// };
