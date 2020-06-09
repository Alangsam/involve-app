import React from "react";
import CaseOverview from "../components/CaseOverview";
import "../style/master.scss"; //import my custom bootstrap
import { approvedOrgs } from "../objects/approvedOrgs";
import { Link } from "react-router-dom";

export default class Landing extends React.Component {
    constructor() {
        super();
        this.state = {
            buttonDisplay: "",
            cardDisplayLogin: "none",
            cardDisplayCreate: "none",
            emailNotApprovedOrgWarning: "none",
            marginBetweenStatementAndCards: "mb-8",
        };
    }

    changeDisplayButton = (e) => {
        const styleDisplayButton = document.getElementById(
            "sign-in-or-create-button"
        );
        const styleDisplayLoginCard = document.getElementById("sign-in-card");
        const styleDisplayCreateCard = document.getElementById(
            "create-account-card"
        );
        if (
            e.target.id === "sign-in-or-create-button" ||
            e.target.id === "sign-in-or-create-button-text"
        ) {
            this.setState({ buttonDisplay: "none" });
            this.setState({ cardDisplayLogin: "" });
            this.setState({ marginBetweenStatementAndCards: "mb-3" });
        } else if ((e.target.id = "show-create-card-button")) {
            this.setState({ cardDisplayLogin: "none" });
            this.setState({ cardDisplayCreate: "" });
            this.setState({ marginBetweenStatementAndCards: "mb-6" });
        }

        console.log(e.target.id);
    };
    isTheEmailValidOrganization = () => {
        const listOfOrgs = approvedOrgs.map((things) => things.domain);
        const newEmailValue = document.getElementById("email-create").value;
        const emailOnlyDomain = String(newEmailValue.match(/(?<=@).*/gi));
        if (listOfOrgs.indexOf(emailOnlyDomain) === -1) {
            this.setState({ emailNotApprovedOrgWarning: "" });
        } else {
            this.setState({ emailNotApprovedOrgWarning: "none" });
        }
    };

    render() {
        const props = this.props;
        return (
            <div className="background-image">
                <div className="container">
                    <div className="row all-v">
                        <div className="col-lg-4 mt-6 ">
                            <div
                                className="d-flex align-items-start flex-column  sticky-top"
                                style={{ height: "95vh" }}
                            >
                                <div
                                    className={`card ${this.state.marginBetweenStatementAndCards} bg-transparent border-none`}
                                >
                                    <h2 className="text-center">Involve</h2>
                                    <p className="text-center">
                                        blah blah blah blah blah blah blah blah
                                        blah blah blah blah blah blah blah blah
                                        blah blah blah blah blah blah blah blah
                                        blah blah blah blah blah blah blah blah
                                        blah blah blah blah blah blah blah blah
                                        blah blah blah blah blah blah blah blah
                                        blah blah blah blah blah blah blah blah
                                        blah blah blah blah blah blah blah blah
                                        blah blah blah blah blah blah
                                    </p>
                                </div>
                                <div className="mb-auto w-100">
                                    <button
                                        id="sign-in-or-create-button"
                                        className="btn btn-primary"
                                        style={{
                                            display: this.state.buttonDisplay,
                                        }}
                                        onClick={(e) => {
                                            this.changeDisplayButton(e);
                                        }}
                                    >
                                        <h2 id="sign-in-or-create-button-text">
                                            Sign in, Create an account
                                        </h2>
                                    </button>
                                    <div className="card">
                                        <div
                                            id="sign-in-card"
                                            className="card-body"
                                            style={{
                                                display: this.state
                                                    .cardDisplayLogin,
                                            }}
                                        >
                                            <h5 className="card-title text-center">
                                                Login, Inform People
                                            </h5>
                                            <form className="form-group text-center">
                                                <label htmlFor="email-login">
                                                    Organization Email
                                                </label>
                                                <input
                                                    id="email-login"
                                                    className=" form-control"
                                                ></input>
                                                <label
                                                    htmlFor="password-login"
                                                    className="text-center"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    id="password-login"
                                                    className=" form-control"
                                                ></input>
                                            </form>
                                            <Link
                                                to="/all-cases-admin"
                                                className="btn btn-dark btn-block"
                                            >
                                                Login
                                            </Link>
                                            <button
                                                id="show-create-card-button"
                                                className="btn btn-dark btn-block my-2"
                                                onClick={(e) => {
                                                    this.changeDisplayButton(e);
                                                }}
                                            >
                                                Create an Account
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div
                                            id="create-account-card"
                                            className="card-body"
                                            style={{
                                                display: this.state
                                                    .cardDisplayCreate,
                                            }}
                                        >
                                            <h5 className="card-title text-center">
                                                Login, Inform People
                                            </h5>
                                            <form className="form-group text-center">
                                                <label htmlFor="email-login">
                                                    Organization Email
                                                </label>
                                                <input
                                                    onChange={() => {}}
                                                    id="email-create"
                                                    className=" form-control"
                                                ></input>
                                                <div
                                                    id="email-creation-invalid"
                                                    className="text-danger"
                                                    style={{
                                                        display: this.state
                                                            .emailNotApprovedOrgWarning,
                                                    }}
                                                >
                                                    Hey that's not okay
                                                </div>
                                                <label
                                                    htmlFor="password-create"
                                                    className="text-center"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    id="password-login"
                                                    className=" form-control"
                                                ></input>
                                            </form>
                                            <button
                                                className="btn btn-dark btn-block"
                                                onClick={() => {
                                                    this.isTheEmailValidOrganization();
                                                }}
                                            >
                                                Create Account
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-fixedmt-auto text-white">
                                    <h1>IN ° VOLVE</h1>
                                    <h3>
                                        cause (a person or group) to experience
                                        or participate in an activity or
                                        situation.
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
}
