import { useState } from "react";
import Illustration from "./Illustration.jsx";
import "./App.css";

const ACCEPT = ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

function isResume(file) {
  return /\.(pdf|doc|docx)$/i.test(file.name);
}

export default function App() {
  const [file, setFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [notice, setNotice] = useState("");

  function choose(next) {
    if (!next) {
      return;
    }
    if (!isResume(next)) {
      setNotice("Please choose a PDF, DOC, or DOCX file.");
      return;
    }
    setFile(next);
    setNotice("");
  }

  function onFinish(event) {
    event.preventDefault();
    if (!file) {
      setNotice("Add a resume before finishing.");
      return;
    }
    setNotice(`Saved ${file.name}. This is the last step in the design.`);
  }

  return (
    <main className="page">
      <section className="hero">
        <div className="copy">
          <h1>
            <span>Finish!</span>
            <span>Upload Your Resume</span>
          </h1>
          <p>
            Upload your resume, the portal will help you parse and optimize, you
            can also skip this step
          </p>
        </div>
        <Illustration />
      </section>

      <section className="panel">
        <form className="card" onSubmit={onFinish}>
          <h2>Upload file</h2>
          <label
            className={dragOver ? "drop is-over" : "drop"}
            onDragOver={(event) => {
              event.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(event) => {
              event.preventDefault();
              setDragOver(false);
              choose(event.dataTransfer.files?.[0]);
            }}
          >
            <input
              type="file"
              accept={ACCEPT}
              onChange={(event) => choose(event.target.files?.[0])}
            />
            <CloudIcon />
            {file ? (
              <strong className="file-name">{file.name}</strong>
            ) : (
              <>
                <span>Browse and upload your resume, or drag and drop it here</span>
                <span className="formats">Supported formats: PDF, DOC, DOCX</span>
              </>
            )}
          </label>

          <div className="actions">
            <button
              type="button"
              className="btn last"
              onClick={() => {
                setFile(null);
                setNotice("");
              }}
            >
              Last step
            </button>
            <button type="submit" className="btn finish">
              Finish
            </button>
          </div>

          <div className="steps" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p className="notice" role="status">
            {notice}
          </p>
        </form>
      </section>
    </main>
  );
}

function CloudIcon() {
  return (
    <svg className="cloud" viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M16 32h16.5a7.5 7.5 0 0 0 1.2-14.9 10 10 0 0 0-19.2-2.2A7 7 0 0 0 16 32z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <path
        d="M24 30V18m0 0-4.5 4.5M24 18l4.5 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
