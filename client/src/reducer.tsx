import { IGlobalState } from "./models";

const initialState = {
  messages: [],
};

const reducer = (state: IGlobalState = initialState, action: any) => {
  switch (action.type) {
    case "PUSHER_EVENT":
      return {
        messages: [...state.messages, JSON.parse(action.payload.message)],
      };
    default:
      return state;
  }
};

export default reducer;
