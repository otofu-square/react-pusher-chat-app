import * as React from "react";

interface IProps {
  messages: string[];
  channel: any;
}

class App extends React.Component<IProps, {}> {
  public messages: string[];
  public channel: any;

  constructor(props: IProps) {
    super();
    this.messages = props.messages;
    this.channel = props.channel;
  }

  public render() {
    return (
      <div>
        <h1>Hello World</h1>
        {this.messages.map(message =>
          <p key={message}>
            {message}
          </p>,
        )}
      </div>
    );
  }
}

export default App;
