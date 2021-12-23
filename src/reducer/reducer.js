const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_STAYS':
      return { ...state, stays: action.payload, isLoading: false };
    case 'OPEN_MODAL':
      return { ...state, isModalOpen: true };
    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false };
    default:
      return state;
  }
};

export default reducer;
