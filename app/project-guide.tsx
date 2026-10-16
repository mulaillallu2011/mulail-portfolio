"use client";
import { useState } from "react";
import { projectGuides } from "./project-guides";

export default function ProjectGuide({ id }: { id: string }) {
  const guide = projectGuides[id];
  const [copyStatus, setCopyStatus] = useState("");
  if (!guide) return null;
  return <div className="project-guide">
    <section><h3>Features</h3><ul>{guide.features.map(item => <li key={item}>{item}</li>)}</ul></section>
    <section><h3>Components & tools</h3><ul>{guide.components.map(item => <li key={item}>{item}</li>)}</ul></section>
    <section><h3>{["03", "06", "07"].includes(id) ? "How it connects" : "Connections"}</h3>
      <div className="connection-table"><table><thead><tr><th>Component / signal</th><th>Connection</th></tr></thead><tbody>{guide.connections.map(([from, to]) => <tr key={from}><td>{from}</td><td>{to}</td></tr>)}</tbody></table></div>
    </section>
    <section><h3>Build notes</h3><p>{guide.note}</p></section>
    <section><h3>Code</h3>{guide.code ? <>
      <div className="guide-actions"><button className="button secondary" onClick={async () => { try { await navigator.clipboard.writeText(guide.code!); setCopyStatus("Code copied"); } catch { setCopyStatus("Copy unavailable. Use Download code or select the text below."); } }}>Copy code</button>
      <a className="button secondary" download={`project-${id}.${["02","04","05"].includes(id) ? "ino" : "js"}`} href={`data:text/plain;charset=utf-8,${encodeURIComponent(guide.code)}`}>Download code</a></div>
      <p role="status" aria-live="polite">{copyStatus}</p>
      <details><summary>Read code ({guide.code.split("\n").length} lines)</summary><pre tabIndex={0}><code>{guide.code}</code></pre></details>
    </> : id === "03" ? <p>Application source is available through Files above. See the folder README for setup requirements and deployment status.</p> : <p>The complete source is not available in the recovered chats yet.</p>}</section>
  </div>;
}
