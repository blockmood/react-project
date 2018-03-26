import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import store from './store/Store.js'

import './static/css/common.less'
import './static/css/font.css'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
