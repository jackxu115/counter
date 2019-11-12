export default (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return Object.assign({}, state, { state: state + 1 });
    case "DECREMENT":
      return Object.assign({}, state, { state: state - 1 });
    default:
      return state;
  }
};
