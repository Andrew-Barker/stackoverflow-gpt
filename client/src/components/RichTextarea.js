import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill CSS

const RichTextarea = () => {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      ["link", "image", "video"],
      [{ color: [] }, { background: [] }], // dropdown with defaults
      [{ align: [] }],

      ["clean"], // remove formatting button
    ],
  };

  return (
    <div
      className="my-3 resize-y"
      style={{
        minHeight: "200px",
        width: "100%",
        resize: "vertical",
        padding: "0",
      }}
    >
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        placeholder="Enter your answer here..."
        style={{ height: "100%" }}
      />
      <button className="bg-secondary text-white px-4 py-2 mt-12 rounded-md text-sm">Post Your Answer</button>
    </div>
  );
};

export default RichTextarea;
