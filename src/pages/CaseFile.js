import React from "react";
import { Link } from "react-router-dom";
import CaseDesc from "../components/CaseDesc";

export default class CaseFile extends React.Component {
    render() {
        return (
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-dark">
                            <div className="">
                                <Link to="/" className="btn text-dark">
                                    Back
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
