import React from "react";
import CaseOverview from "../components/CaseOverview";
import MakeEmSidebySide from "../components/MakeEmSidebySide";
import { Link } from "react-router-dom";

export default function AllCases() {
    return (
        <div>
            <div className="background-image">
                <div className="text-center">
                    <Link to="/" className="btn btn-outline-light pb-0">
                        <h6>Back To Home</h6>
                    </Link>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="btn-group btn-block mb-8 mt-7">
                                <button className="btn btn-outline-light">
                                    Name
                                </button>
                                <button className="btn btn-outline-light">
                                    Sort
                                </button>
                                <button className="btn btn-outline-light">
                                    Search
                                </button>
                            </div>
                            <MakeEmSidebySide side="left">
                                <CaseOverview
                                    id="hello"
                                    name="Joseph Abbitt"
                                    url="https://www.innocenceproject.org/wp-content/uploads/2016/02/8f038d8e-e7ae-4ea0-bc1c-c5632286e9d6.jpeg"
                                />
                            </MakeEmSidebySide>
                            <MakeEmSidebySide side="right">
                                <CaseOverview
                                    id="hello"
                                    name="Christopher Abernathy"
                                    url="https://www.innocenceproject.org/wp-content/uploads/2016/02/925b00c6-b04b-44b9-938b-a3fa387373c0.jpeg"
                                />
                            </MakeEmSidebySide>
                            <MakeEmSidebySide side="left">
                                <CaseOverview
                                    id="hello"
                                    name="Clemente Aguirre-Jarquin"
                                    url="https://www.innocenceproject.org/wp-content/uploads/2018/11/IMG_0389-768x527.jpg"
                                />
                            </MakeEmSidebySide>
                            <MakeEmSidebySide side="right">
                                <CaseOverview
                                    id="hello"
                                    name="Joseph Abbitt"
                                    url="https://www.innocenceproject.org/wp-content/uploads/2016/02/8f038d8e-e7ae-4ea0-bc1c-c5632286e9d6.jpeg"
                                />
                            </MakeEmSidebySide>
                            <MakeEmSidebySide side="left">
                                <CaseOverview
                                    id="hello"
                                    name="Joseph Abbitt"
                                    url="https://www.innocenceproject.org/wp-content/uploads/2016/02/8f038d8e-e7ae-4ea0-bc1c-c5632286e9d6.jpeg"
                                />
                            </MakeEmSidebySide>
                            <MakeEmSidebySide side="right">
                                <CaseOverview
                                    id="hello"
                                    name="Joseph Abbitt"
                                    url="https://www.innocenceproject.org/wp-content/uploads/2016/02/8f038d8e-e7ae-4ea0-bc1c-c5632286e9d6.jpeg"
                                />
                            </MakeEmSidebySide>
                            <MakeEmSidebySide side="left">
                                <CaseOverview
                                    id="hello"
                                    name="Joseph Abbitt"
                                    url="https://www.innocenceproject.org/wp-content/uploads/2016/02/8f038d8e-e7ae-4ea0-bc1c-c5632286e9d6.jpeg"
                                />
                            </MakeEmSidebySide>
                            <MakeEmSidebySide side="right">
                                <CaseOverview
                                    id="hello"
                                    name="Joseph Abbitt"
                                    url="https://www.innocenceproject.org/wp-content/uploads/2016/02/8f038d8e-e7ae-4ea0-bc1c-c5632286e9d6.jpeg"
                                />
                            </MakeEmSidebySide>
                            <div className="col-5 d-inline-block">
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
                                <CaseOverview />
                                <CaseOverview />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
