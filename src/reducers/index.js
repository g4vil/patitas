const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'SET_LOGIN':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}

export default reducer;