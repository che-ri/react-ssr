import React from "react";

function App() {
  const [cnt, setCnt] = React.useState(0);
  const [list, setList] = React.useState([]);

  return (
    <div>
      <h1>count up</h1>
      <span>{cnt}</span>
      <button onClick={() => setCnt(cnt + 1)}>+</button>
      <div>
        <h1>list</h1>
        <button onClick={() => setList([...list, list.length])}>리스트 추가</button>
        <ul>
          {list.map((e) => (
            <li key={`list-${e}`}>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
