import * as React from "react";

interface IProps {
  messages: string[];
}

const App = ({ messages }: IProps) =>
  <div>
    <h1>Hello World</h1>
    {messages.map(message =>
      <p key={message}>
        {message}
      </p>,
    )}
  </div>;

export default App;
