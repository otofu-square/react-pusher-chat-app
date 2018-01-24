export const UPDATE_INPUT_FORM = "UPDATE_INPUT_FORM";
export const SUBMIT_REQUEST = "SUBMIT_REQUEST";
export const SUBMIT_FAILURE = "SUBMIT_FAILURE";
export const SUBMIT_SUCCESS = "SUBMIT_SUCCESS";

export interface IActions {
  UPDATE_INPUT_FORM: {
    type: typeof UPDATE_INPUT_FORM;
    payload: string;
  };
  SUBMIT_REQUEST: { type: typeof SUBMIT_REQUEST };
  SUBMIT_FAILURE: { type: typeof SUBMIT_FAILURE };
  SUBMIT_SUCCESS: { type: typeof SUBMIT_SUCCESS };
}

export type IAction = IActions[keyof IActions];

export const updateInputForm = (input: string) => ({
  type: UPDATE_INPUT_FORM as typeof UPDATE_INPUT_FORM,
  payload: input,
});

export const submitRequest = () => ({
  type: SUBMIT_REQUEST as typeof SUBMIT_REQUEST,
});

export const submitFailure = () => ({
  type: SUBMIT_FAILURE as typeof SUBMIT_FAILURE,
});

export const submitSuccess = () => ({
  type: SUBMIT_SUCCESS as typeof SUBMIT_SUCCESS,
});
