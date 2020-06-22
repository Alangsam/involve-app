import React from "react";
import { Link } from "react-router-dom";
import CaseDesc from "../components/CaseDesc";

export default class CaseFileAdmin extends React.Component {
    render() {
        return (
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-dark">
                            <div className="">
                                <Link
                                    to="/all-cases-admin"
                                    className="btn text-dark"
                                >
                                    Back
                                </Link>
                                <Link
                                    to="/case-name-edit"
                                    className="btn text-dark float-right"
                                >
                                    ...
                                </Link>
                            </div>
                            <CaseDesc />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
