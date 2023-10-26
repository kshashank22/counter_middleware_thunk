export const IncrementCounter = () => ({
  type: "counterIncrease",
});

export const DecrementCounter = () => ({
  type: "counterDecrease",
});

export const GetData = (payload) => ({
  type: "useradd",
  payload,
});
