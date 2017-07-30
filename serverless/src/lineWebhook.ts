import { APIGatewayEvent, Callback, Context } from "aws-lambda";
import { head, lensProp, pipe, view } from "ramda";

import { pusher } from "./lib/pusher";

const extractLineWebhookEvent = pipe(
  JSON.parse,
  view(lensProp("events")),
  head,
  JSON.stringify,
);

export const execute = (
  event: APIGatewayEvent,
  _: Context,
  callback: Callback,
) => {
  pusher.trigger("my-channel", "my-event", {
    message: extractLineWebhookEvent(event.body as string),
  });
  callback(undefined, {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event,
    }),
  });
};
