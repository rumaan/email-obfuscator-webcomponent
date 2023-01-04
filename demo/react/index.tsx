import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "email-obfuscator-webcomponent";

function App() {
  const [count, setCount] = useState(0);
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <h1>Hello From React!</h1>
      <obfuscated-email-address src="https://rumaan.dev/jkvu1o0le24.png"></obfuscated-email-address>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginBlock: "2rem",
        }}
      >
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </div>
      <a
        style={{ textAlign: "center" }}
        href="https://github.com/rumaan/email-obfuscator-webcomponent/tree/main/demo/react"
      >
        Source
      </a>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
