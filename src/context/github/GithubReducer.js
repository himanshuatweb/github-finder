const githubreducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING_AND_LOADING_REPO':
      return {
        ...state,
        loading: true,
        loadingRepo: true,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'GET_USER_AND_REPOS':
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
        loadingRepo: false,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default githubreducer;
