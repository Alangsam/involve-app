import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import AllCasesAdmin from "./pages/AllCasesAdmin";
import CaseFile from "./pages/CaseFile";
import CaseFileEdit from "./pages/CaseFileEdit";
import Wysiwyg from "./components/Wysiwyg";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route
                    exact
                    path="/all-cases-admin"
                    component={AllCasesAdmin}
                />
                <Route exact path="/case-name" component={CaseFile} />
                <Route exact path="/case-name-edit" component={CaseFileEdit} />
                <Route exact path="/wysiwyg" component={Wysiwyg} />
            </Switch>
        </Router>
    );
}
