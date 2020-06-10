import React from "react";

export default class Wysiwyg extends React.Component {
    constructor() {
        super();
        this.state = {
            IsItBold: "false",
            IsItItalic: "false",
            WhatsInTheBox: "",
            whatsHighlighted: "",
        };
    }

    makeItBold() {
        document.execCommand("bold", false);
        // seperate into objects
        // add a span to every section whos key value implies it should be bold
    }
    makeItItalic() {
        document.execCommand("italic", false);
    }

    makeItALink() {
        let whatTheyWant = "www.google.com";
        document.execCommand("createLink", false, whatTheyWant);
    }
    getWhatsHighlighted() {
        let text = "";
        let activeEl = document.activeElement;
        let activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
        if (
            activeElTagName === "textarea" ||
            (activeElTagName === "input" &&
                /^(?:text|search|password|tel|url)$/i.test(activeEl.type) &&
                typeof activeEl.selectionStart == "number")
        ) {
            text = activeEl.value.slice(
                activeEl.selectionStart,
                activeEl.selectionEnd
            );
        } else if (window.getSelection) {
            text = window.getSelection().toString();
        }
        console.log(text);
        this.setState({ whatsHighlighted: text });
        return text;
    }

    updateWhatsInTheBox() {}

    render() {
        return (
            <div className="background-image" id="everything-wrapped-up">
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="card">
                                <div className="btn-group">
                                    <button
                                        className="btn btn-outline-dark"
                                        onClick={() => {
                                            this.makeItBold();
                                        }}
                                    >
                                        Bold
                                    </button>
                                    <button
                                        className="btn btn-outline-dark"
                                        onClick={() => {
                                            this.makeItItalic();
                                        }}
                                    >
                                        Italics
                                    </button>
                                    <button
                                        className="btn btn-outline-dark"
                                        onClick={() => {
                                            this.makeItALink();
                                        }}
                                    >
                                        Embed Link
                                    </button>
                                </div>
                                <div>
                                    <div
                                        onKeyUp={() => {}}
                                        id="wysiwyg-text-area"
                                        className="w-100"
                                        contentEditable="true"
                                        suppressContentEditableWarning={true}
                                        onClick={() => {}}
                                    ></div>
                                </div>
                            </div>
                            <div
                                className="col-4 offset-4"
                                id="pop-up-url-input"
                            >
                                <div className="card">
                                    <div className="card-body text-center">
                                        <label className="text-center">
                                            Enter URL Below
                                        </label>
                                        <input className="form-control"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
