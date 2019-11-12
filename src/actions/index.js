export const increment = () => {
  return { type: "INCREMENT" };
};

export const decrement = () => {
  return { type: "DECREMENT" };
};

export const reset = () => {
  return { type: "RESET" };
};

export const incrementAmount = count => {
  return { type: "INCREMENT_AMOUNT", count: count };
};
