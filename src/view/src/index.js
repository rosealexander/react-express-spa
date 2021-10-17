import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
    <Auth0Provider
        domain="react-express-spa.us.auth0.com"
        clientId="W4F9jbSY7xdmFOxmocIFW5j66k4nnTXr"
        redirectUri={window.location.origin}
        audience="https://react-express-spa.us.auth0.com/api/v2/"
        scope="read:current_user update:current_user_metadata"
    >
        <App />
    </Auth0Provider>
    , document.querySelector('#root')
);
