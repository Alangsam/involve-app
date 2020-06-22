import React from "react";
import { Link } from "react-router-dom";

export default function CaseOverview(props) {
    return (
        <div className="card mb-6 bg-transparent">
            <h2 className="text-center bg-dark text-light mb-0 rounded-top">
                {props.name}
            </h2>
            <div className="hmmm">
                <img
                    src={props.url}
                    alt="forgot this dudes name"
                    className="thumb-post rounded-bottom"
                />
            </div>

            <p className="text-center">
                blah blah blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah blah
                blah........
            </p>
            <h6 className="">
                <b>posted by Blah B. Blah on jan/1/20 at 11:11pm</b>
            </h6>
            <Link to="/case-name" className="btn btn-dark text-light ">
                <h3>view more</h3>
            </Link>
        </div>
    );
}
