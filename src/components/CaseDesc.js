import React from "react";
import { caseInformation } from "../objects/caseInformation";
import ContactInfo from "./ContactInfo";

const exampleCase = caseInformation[1];

export default class CaseDesc extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="text-center text-dark">
                    <h1>{exampleCase.nameOfPersonOrGroup}</h1>
                </div>
                <img
                    className="w-100 rounded"
                    src={exampleCase.urlOfPicture}
                    alt={exampleCase.nameOfPersonOrGroup}
                />
                <div className="row">
                    <div id="top-text" className="col-8 ">
                        <h1 className="text-center">
                            {exampleCase.whatHappened}
                        </h1>
                        {/* figure out using capital w what is the most characters someone
                        can put here to maintain a single line */}
                        <div id="last-date-edited">
                            <h6 className="d-inline-block align-bottom">
                                <b>3/13/20 04:23</b>
                            </h6>
                            <h6 className="float-md-right d-inline-block align-bottom">
                                <b>
                                    {exampleCase.whoUpdatedLast[0] +
                                        "-" +
                                        exampleCase.whoUpdatedLast[1]}
                                </b>
                            </h6>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div id="left-text" className="col-8">
                        <p>{exampleCase.backgroundInformation}</p>
                    </div>
                    <div id="right-text" className="col-4">
                        <ContactInfo case={exampleCase} />
                    </div>
                </div>

                <div className="mt-9"></div>
            </div>
        );
    }
}
