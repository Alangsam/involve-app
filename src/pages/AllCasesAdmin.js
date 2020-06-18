import React from "react";
import MakeEmSidebySide from "../components/MakeEmSidebySide";
import { Link } from "react-router-dom";
import CaseOverviewEdit from "../components/CaseOverviewEdit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function AllCasesAdmin() {
    return (
        <div>
            <div className="">
                <div className="text-center">
                    <Link to="/" className="btn  pb-0">
                        <h6>Back To Home</h6>
                    </Link>
                    <Link to="/case-new" className="btn  pb-0">
                        <h6>Create New </h6>
                    </Link>
                </div>
                <div className="container">
                    <div className="row no-gutters my-5">
                        <div className="col-3 d-inline-block text-left">
                            <h6 className="">Logged in as:</h6>
                            <h6 className="">Alex Langsam/ Red Cross</h6>
                        </div>
                        <div className="d-inline col-1 pr-2 mt-1">
                            <FontAwesomeIcon
                                icon={faSearch}
                                className="float-right"
                                size="2x"
                            />
                        </div>
                        <div className="col-4 d-inline-block align-bottom">
                            <input
                                id="search-cases"
                                className="form-control d-inline"
                            ></input>
                        </div>
                        <div className="col-4 align-bottom d-inline-block pl-7">
                            <select id="sort-cases" className="form-control ">
                                <option>A-Z</option>
                                <option>Z-A</option>
                                <option>Most Recent</option>
                                <option>Oldest</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <MakeEmSidebySide side="left">
                                <CaseOverviewEdit
                                    id="hello"
                                    name="Joseph Abbitt"
                                    url="https://www.innocenceproject.org/wp-content/uploads/2016/02/8f038d8e-e7ae-4ea0-bc1c-c5632286e9d6.jpeg"
                                />
                            </MakeEmSidebySide>
                            <MakeEmSidebySide side="right">
                                <CaseOverviewEdit
                                    id="hello"
                                    name="Christopher Abernathy"
                                    url="https://www.innocenceproject.org/wp-content/uploads/2016/02/925b00c6-b04b-44b9-938b-a3fa387373c0.jpeg"
                                />
                            </MakeEmSidebySide>
                            <MakeEmSidebySide side="left">
                                <CaseOverviewEdit
                                    id="hello"
                                    name="Clemente Aguirre-Jarquin"
                                    url="https://www.innocenceproject.org/wp-content/uploads/2018/11/IMG_0389-768x527.jpg"
                                />
                            </MakeEmSidebySide>
                            <MakeEmSidebySide side="right">
                                <CaseOverviewEdit
                                    id="hello"
                                    name="Joseph Abbitt"
                                    url="https://www.innocenceproject.org/wp-content/uploads/2016/02/8f038d8e-e7ae-4ea0-bc1c-c5632286e9d6.jpeg"
                                />
                            </MakeEmSidebySide>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
