import React from "react";
import { Link } from "react-router-dom";

export default function CaseFileEdit() {
    return (
        <div className="background-image">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1 text-light">
                        <div className="">
                            <Link
                                to="/all-cases-admin"
                                className="btn text-light"
                            >
                                Back
                            </Link>
                            <Link to="/" className="btn text-light float-right">
                                Signout
                            </Link>
                        </div>
                        <div className="text-center text-light">
                            <h1>Joseph Abbitt</h1>
                        </div>
                        <img
                            className="w-100 rounded"
                            src="https://www.innocenceproject.org/wp-content/uploads/2016/02/8f038d8e-e7ae-4ea0-bc1c-c5632286e9d6.jpeg"
                            alt="my guy"
                        />
                        <p>What Happened: </p>
                        <p>What they need:</p>
                        <p>Humanizing Description: </p>
                        <p>Who To Contact: </p>
                        <p>How to contact: </p>
                        <p>Where is this taking Place:</p>
                        <div className="mt-9">
                            <h6 className="d-inline-block align-bottom">
                                Last updated: 3/13/20 04:23
                            </h6>
                            <h6 className="float-md-right d-inline-block align-bottom">
                                By: Alex Langsam, blahOrg, 827364284
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
