import { useState } from "react";
import { row } from "./row";
interface Props {
  dataRows: row[];
  onCreate: (newRow: row) => void;
}
function UpdatePage({ dataRows, onCreate }: Props) {
  const [dataIndex, setDataIndex] = useState(-1);
  const [userName, setUserName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");

  const [fieldValue, setFieldValue] = useState("");

  return (
    <>
      <h2>Update Row</h2>

      {dataIndex === -1 ? (
        <>
          <form>
            <div className="mb-3">
              <label className="form-label">Id of row to modify</label>
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
                var rowIndex = dataRows.findIndex((row) => row.rowId === rowId);
                if (rowIndex >= 0) {
                  setDataIndex(rowIndex);
                  setUserName(dataRows[rowIndex].userName);
                  setEventDescription(dataRows[rowIndex].eventDescription);
                  setEventDate(dataRows[rowIndex].eventDate);
                  setEventLocation(dataRows[rowIndex].eventLocation);
                }
              }
            }}
          >
            Submit
          </button>
        </>
      ) : (
        <>
          <form>
            <label className="form-label">
              <h3>Modify RowId {dataRows[dataIndex].rowId}</h3>
            </label>
            <div className="mb-3">
              <label className="form-label">User Name</label>
              <input
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
                type="text"
                className="form-control"
                id="inputUserName"
                defaultValue={dataRows[dataIndex].userName}
              />
              <label className="form-label">Event Description</label>
              <input
                onChange={(event) => {
                  setEventDescription(event.target.value);
                }}
                type="text"
                className="form-control"
                id="inputEventDescription"
                defaultValue={dataRows[dataIndex].eventDescription}
              />
              <label className="form-label">Event Date</label>
              <input
                onChange={(event) => {
                  setEventDate(event.target.value);
                }}
                type="date"
                className="form-control"
                id="inputEventDate"
                defaultValue={dataRows[dataIndex].eventDate}
              />
              <label className="form-label">Event Location</label>
              <input
                onChange={(event) => {
                  setEventLocation(event.target.value);
                }}
                type="text"
                className="form-control"
                id="inputEventLocation"
                defaultValue={dataRows[dataIndex].eventLocation}
              />
            </div>
          </form>
          <button
            className="btn btn-primary"
            onClick={() => {
              let newRow: row = {
                rowId: dataRows[dataIndex].rowId,
                userName: userName,
                eventDescription: eventDescription,
                eventLocation: eventLocation,
                eventDate: eventDate,
              };
              onCreate(newRow);
            }}
          >
            Submit
          </button>
        </>
      )}
    </>
  );
}
export default UpdatePage;
