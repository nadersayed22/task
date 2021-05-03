import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-widgets/dist/css/react-widgets.css'
//import './app/layout/styles.css';
import * as serviceWorker from './serviceWorker';
import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable';
//import './polyfill';
import './index.css';
import App from './App';
//import ScrollToTop from './app/layout/ScrollToTop';



export const history = createBrowserHistory();

ReactDOM.render(
    <div className="App">
            <Router history={history}>
                    <App />
            </Router>
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//serviceWorker.register();
