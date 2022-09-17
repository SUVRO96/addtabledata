import { useRef, useState } from "react";
import "./App.css";

function App() {
  const val1 = useRef();
  const val2 = useRef();
  const val3 = useRef();

  const [rowid, setRowId] = useState("");
  const [show, setShow] = useState(false);
  const [rows, setRows] = useState([]);
  const sumCol1 = rows.reduce(function (acc, obj) {
    return acc + parseInt(obj.val1);
  }, 0);
  const sumCol2 = rows.reduce(function (acc, obj) {
    return acc + parseInt(obj.val2);
  }, 0);
  const sumCol3 = rows.reduce(function (acc, obj) {
    return acc + parseInt(obj.val3);
  }, 0);

  const addRowFn = () => {
    let obj = {};
    if (
      val1.current.value !== "" &&
      val2.current.value !== "" &&
      val3.current.value !== ""
    ) {
      obj.val1 = val1.current.value;
      obj.val2 = val2.current.value;
      obj.val3 = val3.current.value;
      obj.sum = parseInt(obj.val1) + parseInt(obj.val2) + parseInt(obj.val3);
      setRows([...rows, obj]);
      val1.current.value = "";
      val2.current.value = "";
      val3.current.value = "";
    }
  };
  console.log(rows);
  const deleteRowFn = () => {};
  return (
    <div className="App">
      <button onClick={addRowFn}>Add</button>
      <button onClick={deleteRowFn}>Delete</button>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Sum
      </button>
      <br />
      <input ref={val1} />
      <input ref={val2} />
      <input ref={val3} />
      <div>
        <table>
          <thead>
            <tr>
              <th>A</th>
              <th>B</th>
              <th>C</th>
              {show && <th>Sum</th>}
            </tr>
          </thead>
          <tbody id="table_body">
            {rows &&
              rows.map(item => (
                <tr>
                  <td>{item.val1}</td>
                  <td>{item.val2}</td>
                  <td>{item.val3}</td>
                  {show && <td>{item.sum}</td>}
                </tr>
              ))}
            {show && (
              <tr>
                <td>{sumCol1}</td>
                <td>{sumCol2}</td>
                <td>{sumCol3}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
