interface IState {
  messages: string[];
}

const initialState = {
  messages: [],
};

const reducer = (state: IState = initialState, action: any) => {
  switch (action.type) {
    case "PUSHER_EVENT":
      return { messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};

export default reducer;
