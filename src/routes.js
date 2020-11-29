import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot_Password from "./pages/Forgot_Password";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Login} path="/" exact />
            <Route component={Register} path="/register" />
            <Route component={Forgot_Password} path="/forgot-password" />
        </BrowserRouter>
    )
}

export default Routes;