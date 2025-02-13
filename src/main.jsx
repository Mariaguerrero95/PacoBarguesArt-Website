{/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx';
import { HashRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter>
            <App />
        </HashRouter>     
    </StrictMode>,
)*/}

import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";  
import App from "./components/App.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </StrictMode>
);