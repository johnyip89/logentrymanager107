import { row } from "./row";

interface Props {
  dataRows: row[];
}

function ReadPage({ dataRows }: Props) {
  return (
    <>
      <h2>Read All Rows</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">User Name</th>
            <th scope="col">Event Description</th>
            <th scope="col">Event Date</th>
            <th scope="col">Event Location</th>
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row) => (
            <tr key={row.rowId.toString()}>
              <th scope="row">{row.rowId}</th>
              <td>{row.userName}</td>
              <td>{row.eventDescription}</td>
              <td>{row.eventDate}</td>
              <td>{row.eventLocation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default ReadPage;
