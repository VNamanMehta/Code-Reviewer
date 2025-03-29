import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import { useEffect, useState } from "react";
import axios from "axios";
import Markdown from "react-markdown";

function App() {
  const [code, setCode] = useState(`function sum(a, b) {\n  return a + b;\n}`);
  const [darkMode, setDarkMode] = useState(false);
  const [review, setReview] = useState("");

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    try {
      const response = await axios.post("http://localhost:3002/ai/get-review", {
        code,
      });
      setReview(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Toggle Button */}
      <button className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀" : "🌙"}
      </button>

      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={12}
              style={{
                fontFamily: '"Fira Code", monospace',
                fontSize: 16,
                backgroundColor: darkMode ? "#1E293B" : "#E3EAFD",
                color: darkMode ? "#CBD5E1" : "#374151",
                borderRadius: "8px",
                minHeight: "200px",
                width: "100%",
                boxShadow: darkMode
                  ? "0 4px 10px rgba(0, 0, 0, 0.4)"
                  : "0 4px 10px rgba(0, 0, 0, 0.15)",
              }}
            />
          </div>
          <button className="review-btn" onClick={reviewCode}>
            Review
          </button>
        </div>

        <div className="right">
          <Markdown className="markdown">{review}</Markdown>
        </div>
      </main>
    </div>
  );
}

export default App;
