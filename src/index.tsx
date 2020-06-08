import 'src/index.d.ts';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import history from './app/history';
import store from './app/store';

import { App } from './modules/app/components/app.component';

const rootContent = (
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
);

const rootEl = document.getElementById("root");
render(rootContent, rootEl);
