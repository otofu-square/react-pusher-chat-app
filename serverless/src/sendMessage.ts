import { Client } from "@line/bot-sdk";
import { APIGatewayEvent, Callback, Context } from "aws-lambda";

interface IRequestBody {
  userId: string;
  message: string;
}

const client = new Client({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN!,
  channelSecret: process.env.LINE_CHANNEL_SECRET!,
});

export const execute = (
  event: APIGatewayEvent,
  _: Context,
  callback: Callback,
) => {
  const { userId, message } = JSON.parse(event.body!) as IRequestBody;
  client.pushMessage(userId, {
    type: "text",
    text: message,
  });
  callback(undefined, {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event,
    }),
  });
};
