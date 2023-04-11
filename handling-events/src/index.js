import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Clickhandle from './Clickhandle';
import ClickFunctionclass from './ClickFunctionclass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clickhandle />
    <ClickFunctionclass />
  </React.StrictMode>
);

