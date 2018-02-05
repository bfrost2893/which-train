export const updateHome = home => {
  return {
    type: 'UPDATE_HOME',
    home,
  };
};

export const updateWork = work => {
  return {
    type: 'UPDATE_WORK',
    work,
  };
};
