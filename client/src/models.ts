export interface IGlobalState {
  messages: IMessage[];
  inputForm: string;
}

export interface IMessage {
  id: string;
  text: string;
}
