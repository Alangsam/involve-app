import React from "react";

export default function EditablePart() {
    return (
        <div>
            <div
                onKeyUp={() => {}}
                id="wysiwyg-text-area"
                className="w-100 all-v"
                contentEditable="true"
                suppressContentEditableWarning={true}
                onClick={() => {}}
            ></div>
        </div>
    );
}
