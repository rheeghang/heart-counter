import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0); // 숫자 상태 관리

  return (
    <div style={{ 
      textAlign: "center", marginTop: "50px"}}>
        <title>counter </title>
      <h1 
        style={{
          fontSize: "200px"
        }}
      >
        {count}
      </h1>
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          fontSize: "200px",
          marginBottom: "0px",
          padding: "10px 20px",
          border: "solid black 3px",
          width: "100vw",
          cursor: "pointer",
          background: "white"
        }}
      >
        ♥︎
      </button>
    </div>
  );
}

export default App;
