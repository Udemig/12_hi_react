const initialState = {
  users: [],
  isAdmin: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE":
      return state;
    case "DELETE":
      return state;

    default:
      return state;
  }
};

export default userReducer;
