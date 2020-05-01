import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Components
import Navi from './components/Nav';
import Map from './components/Map';
import Home from './reducers/Home';

// Firebase DB global
import fire from './firebase/Fire';
import { useSelector, useDispatch } from 'react-redux';
import { checkSignIn, currentUser } from "./actions/setActions";

// Sign up/in
import SignUpPage from './components/signing/Up';
import SignInPage from './components/signing/In';

function App() {

  const dispatch = useDispatch();
  const signedIn = useSelector(state => state.signedIn);

  React.useEffect( () => {

    fire.auth().onAuthStateChanged(function(user) {

      console.log(user)

      if (user) {
          dispatch(checkSignIn(true));
          dispatch(currentUser(user));
      } else {
          dispatch(checkSignIn(false));
          dispatch(currentUser({name:""}));
      }
    });

  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Navi/>

        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route path={"/map"}>
            {signedIn ? <Map/> : <Redirect to={"/signin"}/>}
          </Route>
          <Route path={"/signup"} component={SignUpPage}/>
          <Route path={"/signin"} component={SignInPage}/>
        </Switch>

        {/* <Map/> */}
      </div>
    </Router>
  );
}

export default (App);