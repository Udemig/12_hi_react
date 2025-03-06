import ActionTypes from "../actionTypes";

const initialState = {
  isLoading: true,
  error: null,
  list: [],
};

const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Yüklenme Durumu
    case ActionTypes.LIST_LOADING:
      return { ...state, isLoading: true };
    // Hata Durumu
    case ActionTypes.LIST_ERROR:
      return { ...state, isLoading: false, error: payload };
    // Veri Gelme Durumu
    case ActionTypes.LIST_SUCCESS:
      return { ...state, isLoading: false, error: null, list: payload };
    // Listeye Ekleme
    case ActionTypes.ADD_TO_LIST:
      const updatedList = state.list.concat(payload);
      return { ...state, list: updatedList };
    // Listeden Kaldırma
    case ActionTypes.REMOVE_FROM_LIST:
      const filtredList = state.list.filter((i) => i.id != payload.id);
      return { ...state, list: filtredList };
    // Varsayılan
    default:
      return state;
  }
};

export default listReducer;
