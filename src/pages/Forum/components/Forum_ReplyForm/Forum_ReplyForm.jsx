import { useState } from "react";
import axios from "axios";

function ReplyForm({ threadId }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(`/api/threads/${threadId}/replies`, {
      content,
    });

    if (response.data.success) {
      alert("Reply posted successfully");
    } else {
      alert("An error occurred");
    }
  };

  return (
    <div className="ReplyForm">
      <form onSubmit={handleSubmit}>
        <label>
          Your Reply:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <input type="submit" value="Post Reply" />
      </form>
    </div>
  );
}

export default ReplyForm;
