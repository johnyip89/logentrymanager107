import { useState } from "react";

interface Props {
  onDelete: (rowIndex: number) => void;
}

function DeletePage({ onDelete }: Props) {
  const [fieldValue, setFieldValue] = useState("");

  return (
    <>
      <h2>Delete</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Id of row to delete</label>
          <input
            onChange={(event) => {
              setFieldValue(event.target.value);
            }}
            type="number"
            className="form-control"
            id="inputRowIndex"
          />
        </div>
      </form>
      <button
        className="btn btn-primary"
        onClick={() => {
          if (fieldValue != null && fieldValue.length > 0) {
            var rowId = JSON.parse(fieldValue);
            onDelete(rowId);
          }
        }}
      >
        Submit
      </button>
    </>
  );
}
export default DeletePage;
