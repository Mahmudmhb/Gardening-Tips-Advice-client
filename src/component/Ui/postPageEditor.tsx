"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); // Dynamic import

const QuillEditor: React.FC = () => {
  const [editorHtml, setEditorHtml] = useState<string>("");

  const handleChange = (html: string) => {
    setEditorHtml(html);
  };

  const handleSubmit = () => {
    console.log(editorHtml); // Handle your post submission logic here
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Create a New Post</h1>
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        className="mb-4 border rounded-md"
      />
      <button
        className="p-2 bg-blue-500 text-white rounded"
        onClick={handleSubmit}
      >
        Submit Post
      </button>
    </div>
  );
};

export default QuillEditor;
