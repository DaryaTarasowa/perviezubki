import {Component} from "react";
import LoginRegister, {
  PROVIDER_GITHUB,
  PROVIDER_FACEBOOK
} from "react-mui-login-register";
import Result from "./Result";


export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      disableLocal: false,
      disableRegister: false
    };
  }
  handleLogin = content => {
    this.addResult(`Logging in with ${JSON.stringify(content)}`);
  };
  handleLoginWithProvider = provider => {
    this.addResult(`Logging in with provider=${provider}`);
  };
  handleRegister = content => {
    this.addResult(`Registering with ${JSON.stringify(content)}`);
  };
  handleRegisterWithProvider = provider => {
    this.addResult(`Registering with provider=${provider}`);
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  addResult = msg => {
    this.setState(prevState => {
      return {
        results: [...prevState.results, msg]
      };
    });
  };

  render() {
    return (
        <LoginRegister
          onLogin={this.handleLogin}
          onLoginWithProvider={this.handleLoginWithProvider}
          onRegister={this.handleRegister}
          onRegisterWithProvider={this.handleRegisterWithProvider}
          providers={[PROVIDER_GITHUB, PROVIDER_FACEBOOK]}
          disableLocal={this.state.disableLocal}
          disableRegister={this.state.disableRegister}
        />
    )};
}
