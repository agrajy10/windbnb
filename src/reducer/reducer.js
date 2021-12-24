const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_STAYS':
      return { ...state, stays: action.payload, isLoading: false };
    case 'OPEN_MODAL':
      return { ...state, isModalOpen: true };
    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false };
    case 'INCREASE_ADULTS':
      return { ...state, adults: state.adults + 1 };
    case 'DECREASE_ADULTS':
      return { ...state, adults: state.adults - 1 };
    case 'INCREASE_CHILDREN':
      return { ...state, children: state.children + 1 };
    case 'DECREASE_CHILDREN':
      return { ...state, children: state.children - 1 };
    case 'SET_LOCATION':
      return { ...state, city: action.payload.city, country: action.payload.country };
    default:
      return state;
  }
};

export default reducer;