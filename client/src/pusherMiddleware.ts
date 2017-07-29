import { Action, Store } from "redux";

export const pusherMiddleware = (pusher: any) => (store: Store<{}>) => {
  const channel = pusher.subscribe("my-channel");
  channel.bind("my-event", (data: any) => {
    store.dispatch({ type: "PUSHER_EVENT", payload: data });
  });
  return (next: any) => (action: Action) => {
    next(action);
  };
};
