import * as Pusher from "pusher-js";
import { applyMiddleware, compose, createStore } from "redux";
import { default as thunk } from "redux-thunk";

import { pusherMiddleware } from "./pusherMiddleware";
import reducer from "./reducer";

const pusher = new Pusher(process.env.PUSHER_KEY as string, {
  cluster: process.env.PUSHER_CLUSTER,
  encrypted: true,
});

export const store = createStore(
  reducer as any,
  compose(
    applyMiddleware(thunk),
    applyMiddleware(pusherMiddleware(pusher) as any),
  ),
);
