import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';


const firebase = require("firebase");
require("firebase/firestore");
firebase.initializeApp({
    apiKey: "AIzaSyCABxA5SFHDQCy5PFGQPaL9N9KAq8mHrHo",
    authDomain: "messenger-app-2ff31.firebaseapp.com",
    databaseURL: "https://messenger-app-2ff31.firebaseio.com",
    projectId: "messenger-app-2ff31",
    storageBucket: "messenger-app-2ff31.appspot.com",
    messagingSenderId: "590407448924",
    appId: "1:590407448924:web:093117bf677c7a15"
});

const routing = (
    < Router >
        <div id='routing-container'>
            <Route exact path="/login" component={LoginComponent}></Route>
            <Route exact path="/signup" component={SignupComponent}></Route>
            <Route exact path="/dashboard" component={DashboardComponent}></Route>
        </div>

    </Router >
);

ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
