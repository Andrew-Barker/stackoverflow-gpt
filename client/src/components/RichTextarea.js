import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { postAnswer } from "../services/ApiService";
import { toast } from "react-toastify";

// Utility function to strip HTML tags and get plain text
const stripHtml = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

const RichTextarea = ({ questionId, reloadQuestion }) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["link", "image", "video"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["clean"],
    ],
  };

  const handlePostAnswer = async () => {
    if (!value.trim()) {
      toast.error("Answer cannot be empty!");
      return;
    }

    // Strip HTML from the answer before posting
    const plainTextAnswer = stripHtml(value);

    setLoading(true);

    try {
      await postAnswer(questionId, plainTextAnswer);
      toast.success("Answer posted successfully!");
      setValue(""); // Clear the editor
      reloadQuestion(); // Reload question details

      // Scroll to the bottom after successfully posting the answer
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } catch (error) {
      toast.error("Error posting answer. Please try again.");
    } finally {
      setLoading(false);
    }
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
      <button className="bg-secondary text-white px-4 py-2 mt-12 rounded-md text-sm" onClick={handlePostAnswer} disabled={loading}>
        {loading ? "Posting..." : "Post Your Answer"}
      </button>
    </div>
  );
};

export default RichTextarea;
