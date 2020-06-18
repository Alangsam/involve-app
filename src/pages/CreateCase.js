import React from "react";
import { approvedOrgs } from "../objects/approvedOrgs";
import { Link } from "react-router-dom";

export default class CreateCase extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>Logged in as:</h4>
                            <h5>Alex Langsam / red Cross</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
