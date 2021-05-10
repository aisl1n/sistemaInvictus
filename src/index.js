import React from 'react';
import { BrowserRouter as Router, withRouter, Route, Switch, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Inicio from './Inicio';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import Login from './Login';
import * as serviceWorker from './serviceWorker';
import App from './App';
import All from './components/All';
// const fakeAuth = {
//     isAuthenticated: false,
//     authenticated(cb) {
//         this.isAuthenticated = true
//         setTimeout(cb, 100)
//     },
//     signout(cb) {
//         this.authenticated = false
//         setTimeout(cb, 100)
//     }
// }

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem("user") !== null
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/',
                state: { from: props.location }
            }} />
    )} />
)

// const AuthButton = withRouter(({ history }) => (
//     fakeAuth.isAuthenticated ? (
//         <p>
//             Welcome! <button onClick={() => {
//                 fakeAuth.signout(() => history.push('/'))
//             }}>Sign out</button>
//         </p>
//     ) : (
//             <p>You are not logged in.</p>
//         )
// ))
ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/login' component={Login} />
                <PrivateRoute exact path='/inicio' component={Inicio} />
                <PrivateRoute exact path='/edit/:id' component={Edit} />
                <PrivateRoute exact path='/create' component={Create} />
                <PrivateRoute exact path='/show/:id' component={Show} />
                <Route exact path='/All/:id' component={All} />

            </Switch>
        </div>
    </Router>,

    document.getElementById('root')


);

serviceWorker.unregister();




// render() {
//     return (
//      <Router>
//         <Switch>
//          <Route exact path='/'component={Auth} />  
//          <Route exact path='/login'component={Login} />
//          <PrivateRoute exact path='/inicio' component={Inicio} />
//          <PrivateRoute exact path='/edit/:id' component={Edit} />
//          <PrivateRoute exact path='/create' component={Create} />
//          <PrivateRoute exact path='/show/:id' component={Show} />
//         </Switch>
//      </Router>
//    );
//  }
// }