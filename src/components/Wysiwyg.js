import React, { Component } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
// import StyleButton from "../components/StyleButton";

class Wysiwyg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
        this.focus = () => this.refs.editor.focus();
        this.onChange = (editorState) => this.setState({ editorState });
        this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
    }

    _toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
        );
    }

    render() {
        const { editorState } = this.state;

        // If the user changes block type before entering any text, we can
        // either style the placeholder or hide it. Let's just hide it now.
        let className = "RichEditor-editor";
        var contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== "unstyled") {
                className += " RichEditor-hidePlaceholder";
            }
        }
        return (
            <div>
                <div className="RichEditor-root">
                    <InlineStyleControls
                        editorState={editorState}
                        onToggle={this.toggleInlineStyle}
                    />
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                    />
                </div>
            </div>
        );
    }
}

class StyleButton extends React.Component {
    constructor() {
        super();
        this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
        };
    }
    render() {
        let className = "RichEditor-styleButton";
        if (this.props.active) {
            className += " RichEditor-activeButton";
        }
        return (
            <button className={className} onMouseDown={this.onToggle}>
                {this.props.label}
            </button>
        );
    }
}

const INLINE_STYLES = [
    {
        label: "Bold",
        style: "BOLD",
    },
    {
        label: "Italic",
        style: "ITALIC",
    },
    {
        label: "Underline",
        style: "UNDERLINE",
    },
    {
        label: "Monospace",
        style: "CODE",
    },
];

const InlineStyleControls = (props) => {
    var currentStyle = props.editorState.getCurrentInlineStyle();
    return (
        <div className="RichEditor-controls">
            {INLINE_STYLES.map((type) => (
                <StyleButton
                    key={type.label}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            ))}
        </div>
    );
};

export default Wysiwyg;
