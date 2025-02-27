import actionTypes from "../actionTypes";

// State'in başlangıç değeri
const initialState = {
  restaurants: [],
  isLoading: false,
  error: null,
};
const restaurantReducers = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.REST_LOADING:
      return { ...state, isLoading: true };

    case actionTypes.REST_ERROR:
      return { ...state, isLoading: false, error: action.payload.message };

    case actionTypes.REST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        restaurants: action.payload,
      };

    default:
      return state;
  }
};

export default restaurantReducers;
