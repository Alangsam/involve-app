import React from "react";

export default class Wysiwyg extends React.Component {
    constructor() {
        super();
        this.state = {
            IsItBold: "false",
            IsItItalic: "false",
            WhatsInTheBox: "",
            whatsHighlighted: "",
            whatsBeingEmbeded: "",
        };
    }

    makeItBold() {
        document.execCommand("bold", false);
    }
    makeItItalic() {
        document.execCommand("italic", false);
    }

    makeItALink() {
        let whatTheyWant = document.getElementById(
            "what-the-user-wants-to-embed"
        ).value;
        document.execCommand("createLink", true, this.state.whatsBeingEmbeded);
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

    blurBackground() {
        document.getElementById("the-wysiwyg-itself").classList.add("blur");
        document.getElementById("pop-up-url-input").style.display = "block";
    }
    unBlurBackground() {
        document.getElementById("the-wysiwyg-itself").classList.remove("blur");
        document.getElementById("pop-up-url-input").style.display = "none";
    }

    render() {
        return (
            <div className="background-image" id="everything-wrapped-up">
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div>
                                <iframe src="/"></iframe>
                                <div className="card" id="the-wysiwyg-itself">
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
                                                this.blurBackground();
                                                document
                                                    .getElementById(
                                                        "what-the-user-wants-to-embed"
                                                    )
                                                    .focus();
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
                                            suppressContentEditableWarning={
                                                true
                                            }
                                            onClick={() => {}}
                                        ></div>
                                    </div>
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
                                        <input
                                            className="form-control"
                                            id="what-the-user-wants-to-embed"
                                        ></input>
                                        <button
                                            onClick={() => {
                                                this.unBlurBackground();
                                                this.makeItALink();
                                                this.setState({
                                                    whatsBeingEmbeded: document.getElementById(
                                                        "what-the-user-wants-to-embed"
                                                    ).value,
                                                });
                                            }}
                                        >
                                            Embed
                                        </button>
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
