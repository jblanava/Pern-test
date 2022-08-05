import ShallowRenderer from "react-test-renderer/shallow";
import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import ListConnections from "./ListConnections";

const mockListConnections: any[] = [];

const mockListConnectionsFilled: any[] = [
  { user1_id: 1, user1_name: "Javi", user2_id: 2, user2_name: "Pedro" },
  { user1_id: 1, user1_name: "Javi", user2_id: 3, user2_name: "Eva" },
  { user1_id: 1, user1_name: "Javi", user2_id: 4, user2_name: "Juan" },
  { user1_id: 2, user1_name: "Pedro", user2_id: 4, user2_name: "Juan" },
  { user1_id: 2, user1_name: "Pedro", user2_id: 3, user2_name: "Eva" },
];

beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(() => {
  jest.clearAllMocks();
});

it("renders Input connection without crashing", () => {
  const utils = ShallowRenderer.createRenderer();
  utils.render(<ListConnections list={mockListConnections}></ListConnections>);
});

it("renders all ListConenction elements", () => {
  render(<ListConnections list={mockListConnections}></ListConnections>);

  const tables = screen.getAllByRole("table");
  expect(tables.length).toBe(1);

  const columns = screen.getAllByRole("columnheader");
  expect(columns.length).toBe(4);

  const rows = screen.getAllByRole("row");
  expect(rows.length).toBe(mockListConnections.length + 1); // list.length + header

  const u1IdHeader = screen.getByTestId("u1IdHeader");
  expect(u1IdHeader.tagName).toBe("TH");
  expect(u1IdHeader.textContent).toBe("User 1 ID");

  const u1NameHeader = screen.getByTestId("u1NameHeader");
  expect(u1NameHeader.tagName).toBe("TH");
  expect(u1NameHeader.textContent).toBe("User 1 Name");

  const u2NameHeader = screen.getByTestId("u2NameHeader");
  expect(u2NameHeader.tagName).toBe("TH");
  expect(u2NameHeader.textContent).toBe("User 2 Name");

  const u2IdHeader = screen.getByTestId("u2IdHeader");
  expect(u2IdHeader.tagName).toBe("TH");
  expect(u2IdHeader.textContent).toBe("User 2 ID");
});

it("List renders all connections correctly", () => {
  render(<ListConnections list={mockListConnectionsFilled}></ListConnections>);

  const rows = screen.getAllByRole("row");
  expect(rows.length).toBe(mockListConnectionsFilled.length + 1); // list.length + header

  for (let i = 1; i < mockListConnectionsFilled.length; i++) {
    // eslint-disable-next-line testing-library/no-node-access
    expect(rows[i].children[0].textContent).toBe(
      mockListConnectionsFilled[i - 1].user1_id.toString()
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(rows[i].children[1].textContent).toBe(
      mockListConnectionsFilled[i - 1].user1_name
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(rows[i].children[2].textContent).toBe(
      mockListConnectionsFilled[i - 1].user2_name
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(rows[i].children[3].textContent).toBe(
      mockListConnectionsFilled[i - 1].user2_id.toString()
    );
  }
});
