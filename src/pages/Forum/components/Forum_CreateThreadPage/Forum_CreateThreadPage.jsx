import { useState } from "react";
import axios from "axios";

function CreateThreadPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post("/api/threads", { title, content });

    if (response.data.success) {
      alert("Thread created successfully");
    } else {
      alert("An error occurred");
    }
  };

  return (
    <div className="CreateThreadPage">
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Content:{" "}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <input type="submit" value="Create Thread" />
      </form>
    </div>
  );
}

export default CreateThreadPage;