import React from "react";

function App() {
  const [cnt, setCnt] = React.useState(0);

  return (
    <div>
      <span>{cnt}</span>
      <button onClick={() => setCnt(cnt + 1)}>+</button>
    </div>
  );
}

export default App;
