import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/fontawesome-4.7/css/font-awesome.min.css";
import '../src/assets/css/style.css';
import '../src/assets/css/responsive.css';
import { BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />    
 </BrowserRouter>
);

