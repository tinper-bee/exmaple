import React from 'react';
import { render } from 'react-dom';
import { App } from './containers';

import 'tinper-bee/assets/tinper-bee.css';

let root = document.getElementById('app');
render( <App />, root );
