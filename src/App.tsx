import CreateForm from "./components/CreatePage";
import ReadPage from "./components/ReadPage";
import UpdatePage from "./components/UpdatePage";
import DeletePage from "./components/DeletePage";

import { row } from "./components/row";
import { useState } from "react";

function App() {
  const [operation, setOperation] = useState("read");

  var rowsSerialized = localStorage.getItem("keyLogEntryManagerData");
  var rowsSerializedNonNull = rowsSerialized ? rowsSerialized : "";
  var rowsInitial =
    rowsSerializedNonNull.length === 0 ? [] : JSON.parse(rowsSerializedNonNull);

  const [stateRows, setStateRows] = useState<Array<row>>(rowsInitial);

  return (
    <div>
      <h1>Log Entry Manager</h1>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            setOperation("create");
          }}
        >
          Create
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            setOperation("read");
          }}
        >
          Read
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            setOperation("update");
          }}
        >
          Update
        </button>{" "}
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            setOperation("delete");
          }}
        >
          Delete
        </button>
      </div>
      {operation === "create" ? (
        <CreateForm
          onCreate={(newRow: row) => {
            let nextIdState =
              stateRows.length === 0
                ? 0 // 0 based
                : stateRows[stateRows.length - 1].rowId + 1;
            let newRowState: row = {
              rowId: nextIdState,
              userName: newRow.userName,
              eventDescription: newRow.eventDescription,
              eventDate: newRow.eventDate,
              eventLocation: newRow.eventLocation,
            };
            var newStateRows = stateRows;
            newStateRows.push(newRowState);
            setStateRows(newStateRows);
            localStorage.setItem(
              "keyLogEntryManagerData",
              JSON.stringify(stateRows)
            );
            setOperation("read");
          }}
        ></CreateForm>
      ) : null}
      {operation === "read" ? <ReadPage dataRows={stateRows} /> : null}
      {operation === "update" ? (
        <UpdatePage
          dataRows={stateRows}
          onCreate={(newRow: row) => {
            var rowIndex = stateRows.findIndex(
              (row) => row.rowId === newRow.rowId
            );
            var newStateRows = stateRows;
            newStateRows[rowIndex] = newRow;
            setStateRows(newStateRows);
            localStorage.setItem(
              "keyLogEntryManagerData",
              JSON.stringify(stateRows)
            );
            setOperation("read");
          }}
        />
      ) : null}
      {operation === "delete" ? (
        <DeletePage
          onDelete={(rowId) => {
            var rowIndex = stateRows.findIndex((row) => row.rowId === rowId);
            if (rowIndex >= 0) {
              var newStateRows = stateRows;
              newStateRows.splice(rowIndex, 1);
              setStateRows(newStateRows);
              localStorage.setItem(
                "keyLogEntryManagerData",
                JSON.stringify(stateRows)
              );
            }
            setOperation("read");
          }}
        />
      ) : null}
    </div>
  );
}
export default App;
