import { APIGatewayEvent, Callback, Context } from "aws-lambda";

import { pusher } from "./lib/pusher";

export const execute = (
  event: APIGatewayEvent,
  _: Context,
  callback: Callback,
) => {
  pusher.trigger("my-channel", "my-event", {
    message: JSON.stringify(JSON.parse(event.body as string).events[0].message),
  });
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event,
    }),
  };
  callback(undefined, response);
};
