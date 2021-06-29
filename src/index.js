import React from 'react';
import ReactDOM from 'react-dom';
import {SpeechProvider}from '@speechly/react-client';

import {Provider} from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId=" db22094c-c760-4645-9d6f-fab4eee1e844" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
     document.getElementById('root')
);