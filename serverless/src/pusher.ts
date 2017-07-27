import { APIGatewayEvent, Callback, Context } from "aws-lambda";

export const execute = (
  event: APIGatewayEvent,
  _: Context,
  callback: Callback,
) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event,
    }),
  };
  callback(undefined, response);
};
