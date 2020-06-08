import React from "react";
import CaseOverview from "../components/CaseOverview";
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div className="background-image">
            <div className="container">
                <div className="row all-v">
                    <div className="col-lg-4 mt-6 ">
                        <div
                            className="d-flex align-items-start flex-column  sticky-top"
                            style={{ height: "95vh" }}
                        >
                            <div className="card mb-8 bg-transparent border-none">
                                <h2 className="text-center">Involve</h2>
                                <p>
                                    blah blah blah blah blah blah blah blah blah
                                    blah blah blah blah blah blah blah blah blah
                                    blah blah blah blah blah blah blah blah blah
                                    blah blah blah blah blah blah blah blah blah
                                    blah blah blah blah blah blah blah blah blah
                                    blah blah blah blah blah blah blah blah blah
                                    blah blah blah blah blah blah blah blah blah
                                    blah blah blah blah blah blah blah
                                </p>
                            </div>
                            <div className="mb-auto  ">
                                <Link to="/login" className="btn btn-primary">
                                    <h2>
                                        Sign in, Create an account, or enter
                                        your info manually when you find the
                                        right cause
                                    </h2>
                                </Link>
                            </div>
                            <div className="position-fixedmt-auto text-white">
                                <h1>IN ° VOLVE</h1>
                                <h3>
                                    cause (a person or group) to experience or
                                    participate in an activity or situation.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-6 offset-lg-1">
                        <div>
                            <CaseOverview
                                id="hello"
                                name="Joseph Abbitt"
                                url="https://www.innocenceproject.org/wp-content/uploads/2016/02/8f038d8e-e7ae-4ea0-bc1c-c5632286e9d6.jpeg"
                            />
                            <CaseOverview
                                name="Christopher Abernathy"
                                url="https://www.innocenceproject.org/wp-content/uploads/2016/02/925b00c6-b04b-44b9-938b-a3fa387373c0.jpeg"
                            />
                            <CaseOverview
                                name="Clemente Aguirre-Jarquin"
                                url="https://www.innocenceproject.org/wp-content/uploads/2018/11/IMG_0389-768x527.jpg"
                            />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                            <CaseOverview />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
