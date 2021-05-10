import React, { Component } from 'react';
import firebase from './Firebase.js';
import './css/Login.css';


 
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
        return( window.confirm("Email ou senha incorreta!"));
      });
  }

  // signup(e){
  //   e.preventDefault();
  //   firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
  //   }).then((u)=>{console.log(u)})
  //   .catch((error) => {
  //       console.log(error);
  //       return( window.confirm("Este email ja existe ou esta incorreto, ou senha menor que 6 (seis) digitos!"));
  //     })
  
render() {
    return (
  <div className="center">
    <div class="container">
      <div class="row">
        <div className="col-md-4">
        </div>
          <div className="col-md-4">
            <div className="container-fluid card-login">
              <div className="card card-shadow">
                <img className="card-img-top img-login align-self-center" src={require('./images/invictusnow.png')} alt="Firebase" />
                <div className="card-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required/>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Senha</label>
                <input value={this.state.password} onChange={this.handleChange}type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Senha" required/>
              </div>
              <div className="butons">
              <button type="submit" onClick={this.login} class="btn btn-success">Login</button>
              {/* <button onClick={this.signup} style={{ marginLeft: '25px' }} className="btn btn-success">Signup</button> */}
              </div>
            </form>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}
export default Login;