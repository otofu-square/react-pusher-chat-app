import * as React from "react";
import { connect } from "react-redux";

import { IGlobalState } from "./models";

const mapStateToProps = (state: IGlobalState) => ({
  messages: state.messages,
  inputForm: state.inputForm,
});

const App = ({ messages }: IGlobalState) =>
  <div>
    <h1>Hello World</h1>
    {messages.map(message =>
      <p key={message.id}>
        {message.text}
      </p>,
    )}
  </div>;

export default connect(mapStateToProps)(App);
