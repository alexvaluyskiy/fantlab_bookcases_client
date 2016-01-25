import React, { Component } from 'react';

export class LoginForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user: '',
      password: ''
    };
  }

  onUserChange (e) {
    this.setState({user: e.target.value});
  }

  onPasswordChange (e) {
    this.setState({password: e.target.value});
  }

  onLoginClick (e) {
    e.preventDefault();
    Auth.login(this.state.user, this.state.password)
        .catch(function (err) {
          console.log('Error logging in', err);
        });
  }

  render () {
    return <div className="login jumbotron center-block">
        <h1>Login</h1>
        <form role="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" onChange={this.onUserChange.bind(this)} className="form-control" id="username" placeholder="Username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" onChange={this.onPasswordChange.bind(this)} className="form-control" id="password" ref="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-default" onClick={this.onLoginClick.bind(this)}>Submit</button>
      </form>
    </div>;
  };
}
