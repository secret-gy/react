import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import memoryutils from "./utils/memoryutils";
import storageUtils from "./utils/storageUtils";

const user = storageUtils.getUser()
memoryutils.user = user

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

