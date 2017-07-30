import { IGlobalState } from "./models";

const initialState = {
  messages: [],
  inputForm: "",
};

const reducer = (state: IGlobalState = initialState, action: any) => {
  switch (action.type) {
    case "PUSHER_EVENT":
      return {
        messages: [...state.messages, JSON.parse(action.payload.message)],
      };
    case "UPDATE_INPUT_FORM":
      return { ...state, inputForm: action.paylaod };
    case "SUBMIT_REQUEST":
      return state;
    case "SUBMIT_FAILURE":
      return state;
    case "SUBMIT_SUCCESS":
      return state;
    default:
      return state;
  }
};

export default reducer;
