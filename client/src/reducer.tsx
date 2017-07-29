import { IGlobalState } from "./models";

const initialState = {
  messages: [],
};

const reducer = (state: IGlobalState = initialState, action: any) => {
  switch (action.type) {
    case "PUSHER_EVENT":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export default reducer;
