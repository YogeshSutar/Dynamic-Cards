import React from 'react'
import { createRoot } from 'react-dom/client';
// import  from 'react-dom'
import App from './App'

// ReactDOM.render()
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <App/>
)