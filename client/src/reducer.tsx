interface IState {
  messages: string[];
}

const initialState = {
  messages: [],
};

const reducer = (state: IState = initialState, action: any) => {
  switch (action.type) {
    case "PUSHER_EVENT":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export default reducer;
