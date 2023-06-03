import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';


const el = document.getElementById('root'); 
const reactDom =  ReactDom.createRoot(el);


reactDom.render(<App/>);