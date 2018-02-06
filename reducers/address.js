export default (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_ADDRESS':
      return {
        ...state,
        [action.addressType]: action.address,
      };
    default:
      return state;
  }
};
