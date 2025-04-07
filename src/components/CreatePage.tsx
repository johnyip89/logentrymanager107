import { useState } from "react";
import { row } from "./row";

interface Props {
  onCreate: (newRow: row) => void;
}

function CreateForm({ onCreate }: Props) {
  // only username is persisted as a default
  var userNameSerialized = localStorage.getItem("keyLogEntryManagerUserName");
  var userNameSerializedNonNull = userNameSerialized ? userNameSerialized : "";
  const [userName, setUserName] = useState(userNameSerializedNonNull);
  const [eventDescription, setEventDescription] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDate, setEventDate] = useState("");

  return (
    <>
      <h2>Create New Row</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input
            onChange={(event) => {
              setUserName(event.target.value);
              localStorage.setItem(
                "keyLogEntryManagerUserName",
                event.target.value
              ); // The most recent value used on this form is the persisted default
            }}
            type="text"
            className="form-control"
            id="inputUserName"
            defaultValue={userName}
          />
          <label className="form-label">Event Description</label>
          <input
            onChange={(event) => {
              setEventDescription(event.target.value);
            }}
            type="text"
            className="form-control"
            id="inputEventDescription"
          />
          <label className="form-label">Event Date</label>
          <input
            onChange={(event) => {
              setEventDate(event.target.value);
            }}
            type="date"
            className="form-control"
            id="inputEventDate"
          />
          <label className="form-label">Event Location</label>
          <input
            onChange={(event) => {
              setEventLocation(event.target.value);
            }}
            type="text"
            className="form-control"
            id="inputEventLocation"
          />
        </div>
      </form>
      <button
        className="btn btn-primary"
        onClick={() => {
          let newRow: row = {
            rowId: -1,
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
  );
}
export default CreateForm;
