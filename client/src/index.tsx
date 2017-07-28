import * as Pusher from "pusher-js";
import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

const pusher = new Pusher(process.env.PUSHER_KEY as string, {
  cluster: process.env.PUSHER_CLUSTER,
  encrypted: true,
});
const channel = pusher.subscribe("my-channel");

const Root = () => <App messages={[]} channel={channel} />;

ReactDOM.render(<Root />, document.getElementById("root"));
