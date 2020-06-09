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
        const splitAtHighlighted = this.state.WhatsInTheBox.split(
            this.state.whatsHighlighted
        );
        const getItinThere = splitAtHighlighted.flatMap(
            (value, index, array) => {
                if (array.length - 1 !== index) {
                    return [value, this.state.whatsHighlighted];
                } else return value;
            }
        );
        const arrOfObjects = [];
        for (let i = 0; i < getItinThere.length; i += 1) {
            if (getItinThere[i] === this.state.whatsHighlighted) {
                arrOfObjects.push({
                    string: getItinThere[i],
                    needsBolded: true,
                });
            } else {
                arrOfObjects.push({
                    string: getItinThere[i],
                    needsBolded: false,
                });
            }
        }
        const newArr = [];
        for (let i = 0; i < arrOfObjects.length; i += 1) {
            if (arrOfObjects[i].needsBolded === true) {
                newArr.push(
                    <b key={Math.random()}>{arrOfObjects[i].string}</b>
                );
            } else {
                newArr.push(arrOfObjects[i].string);
            }
        }
        console.log(newArr);
        this.setState({ WhatsInTheBox: newArr });
        return newArr;
        // seperate into objects
        // add a span to every section whos key value implies it should be bold
    }
    makeItItalic() {
        if (this.state.IsItItalic === "false") {
            document.getElementById("wysiwyg-text-area").style.fontStyle =
                "italic";
            this.setState({
                IsItItalic: "true",
            });
        } else {
            document.getElementById("wysiwyg-text-area").style.fontStyle =
                "normal";
            this.setState({
                IsItItalic: "false",
            });
        }
        console.log(this.state.IsItItalic);
    }

    makeItHighlighted() {
        document.getElementById("wysiwyg-text-area").innerHTML = [
            <span style={{ color: "red" }} key={Math.random}>
                {this.state.WhatsInTheBox}
            </span>,
        ];
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
            <div className="background-image">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="card">
                                <div className="btn-block">
                                    <button
                                        onClick={() => {
                                            this.makeItBold();
                                        }}
                                    >
                                        Bold
                                    </button>
                                    <button
                                        onClick={() => {
                                            this.makeItItalic();
                                        }}
                                    >
                                        Italics
                                    </button>
                                    <button
                                        onClick={() => {
                                            this.makeItHighlighted();
                                        }}
                                    >
                                        Highlight
                                    </button>
                                </div>
                                <div>
                                    <div
                                        onKeyUp={() => {
                                            this.getWhatsHighlighted();
                                            this.setState({
                                                WhatsInTheBox: document.getElementById(
                                                    "wysiwyg-text-area"
                                                ).innerHTML,
                                            });
                                            console.log(
                                                this.state.WhatsInTheBox,
                                                document.activeElement,
                                                document.getElementById(
                                                    "wysiwyg-text-area"
                                                ).innerText
                                            );
                                        }}
                                        id="wysiwyg-text-area"
                                        className="w-100"
                                        contentEditable="true"
                                        suppressContentEditableWarning={true}
                                        onClick={() => {
                                            this.getWhatsHighlighted();
                                        }}
                                    >
                                        {this.state.WhatsInTheBox}
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
