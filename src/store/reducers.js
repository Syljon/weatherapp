import * as actionTypes from "./actionTypes";
const initialState = { city: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        city: action.city
      };
    default:
      return state;
  }
};

export default reducer;
