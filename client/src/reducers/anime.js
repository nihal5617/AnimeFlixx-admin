const animeReducer = (state = { authData: null }, action) => {
    switch (action.type) {
      case "ADD":
        // localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
  
        // return { ...state, authData: action.data, loading: false, errors: null };
        return state;
      default:
        return state;
    }
  };
  
  export default animeReducer;