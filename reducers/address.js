export default (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_HOME':
      return action.home;
    case 'UPDATE_WORK':
      return action.work;
    default:
      return state;
  }
};
