import { APIGatewayEvent, Callback, Context } from "aws-lambda";

import { pusher } from "./lib/pusher";

export const execute = (
  event: APIGatewayEvent,
  _: Context,
  callback: Callback,
) => {
  pusher.trigger("my-channel", "my-event", {
    message: "Hello World",
  });
  callback(undefined, {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event,
    }),
  });
};
