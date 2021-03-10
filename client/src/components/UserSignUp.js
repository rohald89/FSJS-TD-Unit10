import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default class UserSignUp extends Component {
  state = {
    name: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
    errors: [],
  }

  render() {
    const {
      name,
      emailAddress,
      password,
      confirmPassword,
      errors,
    } = this.state;

    return (
      <div className="form--centered">
          <h2>Sign Up</h2>
          <Form 
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Sign Up"
            elements={() => (
              <React.Fragment>
                <label htmlFor="name">Name</label>
                <input 
                  id="name" 
                  name="name" 
                  type="text"
                  value={name} 
                  onChange={this.change} 
                  placeholder="Name" />
                <label htmlFor="emailAddress">Email Address</label>
                <input 
                  id="emailAddress" 
                  name="emailAddress" 
                  type="email"
                  value={emailAddress} 
                  onChange={this.change} 
                  placeholder="Email" />
                <label htmlFor="password">Password</label>
                <input 
                  id="password" 
                  name="password"
                  type="password"
                  value={password} 
                  onChange={this.change} 
                  placeholder="Password" />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    type="password" 
                    value={confirmPassword}
                    onChange={this.change}
                    placeholder="confirm password"/>
              </React.Fragment>
            )} />
          <p>
            Already have a user account? Click here to <Link to="/signin">sign in</Link>!
          </p>
      </div>
    );
  }

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value
      };
    });
  }

  submit = () => {
    const {context } = this.props;

    const { name, emailAddress, password } = this.state;

    const user = {name, emailAddress, password};
    context.data.createUser(user)
    .then( errors => {
      if(errors.length) {
        this.setState({ errors });
      } else {
        context.actions.signIn(emailAddress, password)
        .then(() => {
          this.props.history.push('/authenticated')
        });
      }
    })
    .catch( err => { //handle rejected promises
      console.log(err);
      this.props.history.push('/error'); // push to history stack so the user ends up at the NotFound component (/error route doesn't exist)
    });
  }

  cancel = () => {
    this.props.history.push('/'); // redirect the user back to the homepage
  }
}
