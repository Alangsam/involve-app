import React from "react";
import { Link } from "react-router-dom";
//import FastAverageColor from "fast-average-color";

export default function CaseOverview(props) {
    // var fac = new FastAverageColor();

    // fac.getColorAsync(props.url)
    //     .then(function (color) {
    //         container.style.backgroundColor = color.rgba;
    //         container.style.color = color.isDark ? "#fff" : "#000";

    //         console.log("Average color", color);
    //     })
    //     .catch(function (e) {
    //         console.log(e);
    //     });

    return (
        <div className="card mb-6 bg-transparent">
            <h2 className="text-center bg-dark text-light mb-0 rounded-top">
                {props.name}
            </h2>
            <img
                src={props.url}
                alt="forgot this dudes name"
                className="d-block h-auto w-100 rounded-bottom"
            />
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
            <Link to="/case-name-admin" className="btn btn-dark text-light ">
                <h3>view more</h3>
            </Link>
        </div>
    );
}
