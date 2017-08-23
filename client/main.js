import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import App from './components/App';

const history = createHistory();

const routes = (
    <Router history={history}>
        <App />
    </Router>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.render-target'));
});