import { useState } from "react";
import "./App.css";

function App() {

  const [status, setStatus] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>

      <h2>
        Conditional Styling Example
      </h2>

      <button
        className={status ? "active" : "inactive"}
        onClick={() => setStatus(!status)}
      >
        {status ? "Active" : "Inactive"}
      </button>

    </div>
  );
}

export default App;