import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TimerDashboard from './TimerDashboard';

import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <TimerDashboard />
    </Provider>, document.getElementById('root'));