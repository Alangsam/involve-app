import React from "react";
import Wysiwyg from "../components/Wysiwyg";
import { Link } from "react-router-dom";

export default class CaseFileEdit extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-inline">
                                <h4 className="d-inline">Logged in as:</h4>
                                <h5 className="d-inline">
                                    Alex Langsam / red Cross
                                </h5>
                                <Link
                                    to="/case-name"
                                    className="float-right d-inline text-dark"
                                >
                                    back
                                </Link>
                            </div>
                            <div className="clearfix py-4"></div>
                            <div className="col-4 text-center">
                                <label className="text-center">
                                    Case Title/Name
                                </label>
                                <input className="form-control"></input>
                            </div>
                            <div className="clearfix py-4"></div>
                            <div className="col-4 ">
                                <input
                                    type="file"
                                    className="form-control-file"
                                ></input>
                            </div>
                            <div className="clearfix py-4"></div>
                            <div className="col-4 text-center">
                                <label className="text-center">
                                    What Needs Involvement
                                </label>
                                <input className="form-control"></input>
                            </div>
                            <div className="clearfix py-4"></div>
                            <div
                                id="text editor"
                                className="border border-bottom-0 rounded-top border-dark w-50"
                            >
                                <Wysiwyg></Wysiwyg>
                            </div>
                            <button
                                className="btn-dark w-50 rounded-bottom"
                                type="submit"
                            >
                                Save
                            </button>
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
