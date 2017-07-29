import * as Pusher from "pusher-js";
import { applyMiddleware, createStore } from "redux";

import { pusherMiddleware } from "./pusherMiddleware";

import reducer from "./reducer";

const pusher = new Pusher(process.env.PUSHER_KEY as string, {
  cluster: process.env.PUSHER_CLUSTER,
  encrypted: true,
});

export default applyMiddleware(pusherMiddleware(pusher) as any)(createStore)(
  reducer,
);
