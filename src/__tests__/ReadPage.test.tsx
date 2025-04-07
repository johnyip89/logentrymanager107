import { render, screen } from "@testing-library/react";
import Readpage from "../components/ReadPage";
import { row } from "../components/row";
import "@testing-library/jest-dom";
test("Read Page renders successfully", () => {
  let mockDataRows: row[] = [];
  mockDataRows.push({
    rowId: 101,
    userName: "Alpha Smith",
    eventDescription: "Description A",
    eventDate: "01/01/2025",
    eventLocation: "Location A",
  });
  mockDataRows.push({
    rowId: 102,
    userName: "Bravo Smith",
    eventDescription: "Description B",
    eventDate: "01/02/2025",
    eventLocation: "Location B",
  });
  render(<Readpage dataRows={mockDataRows} />);

  const elementNameA = screen.getByText(/Alpha Smith/i);
  const elementNameB = screen.getByText(/Bravo Smith/i);
  const elementDescriptionB = screen.getByText(/Description B/i);
  const elementLocationB = screen.getByText(/Location B/i);

  expect(elementNameA).toBeInTheDocument();
  expect(elementNameB).toBeInTheDocument();
  expect(elementDescriptionB).toBeInTheDocument();
  expect(elementLocationB).toBeInTheDocument();
});
