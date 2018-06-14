import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import { bgColorChange } from './js/bg';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('eHbSUflKL'));

bgColorChange();
registerServiceWorker();
