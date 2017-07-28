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

  public onUpdate = (data: any) => {
    console.log(data);
  }

  public render() {
    this.channel.bind("my-event", this.onUpdate);
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
