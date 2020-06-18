import React from "react";
import { Link } from "react-router-dom";
import CaseDesc from "../components/CaseDesc";

export default class CaseFileAdmin extends React.Component {
    render() {
        return (
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1 text-dark">
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
