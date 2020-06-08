import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import AllCases from "./pages/AllCases";
import AllCasesAdmin from "./pages/AllCasesAdmin";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/all-cases" component={AllCases} />
                <Route
                    exact
                    path="/all-cases-admin"
                    component={AllCasesAdmin}
                />
            </Switch>
        </Router>
    );
}
