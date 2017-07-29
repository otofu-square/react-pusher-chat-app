import { Action, Store } from "redux";

export const pusherMiddleware = (pusher: any) => (store: Store<{}>) => {
  const channel = pusher.subscribe("my-channel");
  channel.bind("my-event", (data: any) => {
    console.log(data);
  });
  return (next: any) => (action: Action) => {
    next(action);
  };
};
