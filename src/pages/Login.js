import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="background-image">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <Link
                                to="/"
                                className="btn text-light btn-outline-light text-light col-4"
                            >
                                <h4>Back to Homepage</h4>
                            </Link>
                            <Link
                                to="/"
                                className="btn text-light btn-outline-light float-right col-4"
                            >
                                <h4>Apply to be an Organization</h4>
                            </Link>
                        </div>
                        <div className="my-8 d-block">
                            <div className="card bg-light d-md-inline-block col-md-4 my-4">
                                <h2 className="card-header text-center">
                                    <b>Login to Help</b>
                                </h2>
                                <div className="card-body">
                                    <h5 className="card-title text-center">
                                        Login, get Involved
                                    </h5>
                                    <form className="form-group text-center">
                                        <label htmlFor="email-login">
                                            Email
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
                                        to="/all-cases"
                                        className="btn btn-dark"
                                    >
                                        Login
                                    </Link>
                                </div>
                            </div>
                            <div className="card bg-light d-md-inline-block float-right col-md-4 my-4">
                                <h2 className="card-header text-center">
                                    <b>Create Account</b>
                                </h2>
                                <div className="card-body">
                                    <h5 className="card-title text-center">
                                        Sign up, get Involved
                                    </h5>
                                    <form className="form-group text-center">
                                        <label htmlFor="email-login">
                                            Email
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
                                        className="btn btn-dark"
                                        to="/all-cases"
                                    >
                                        Create
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="card bg-light col-md-4 offset-md-4 my-4">
                            <h2 className="card-header text-center">
                                <b>Login for Admin</b>
                            </h2>
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    Login, Inform People
                                </h5>
                                <form className="form-group text-center">
                                    <label htmlFor="email-login">
                                        Unique Name
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
                                <Link to="/" className="btn btn-dark">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
