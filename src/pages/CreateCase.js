import React from "react";
import { approvedOrgs } from "../objects/approvedOrgs";
import { Link } from "react-router-dom";
import Wysiwyg from "../components/Wysiwyg";

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
                        <div>
                            <div>
                                name
                                <input></input>
                            </div>
                            <div className="custom-file">
                                <input type="file"></input>
                            </div>
                        </div>
                        <div>
                            <div>
                                What Happened
                                <input></input>
                            </div>
                        </div>
                        <div
                            id="text editor"
                            className="border border-dark w-50"
                        >
                            <Wysiwyg></Wysiwyg>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
