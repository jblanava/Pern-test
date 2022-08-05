import ShallowRenderer from "react-test-renderer/shallow";
import Connection from "./Connection";

beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(() => {
  jest.clearAllMocks();
});

it("renders Connection without crashing", () => {
  const utils = ShallowRenderer.createRenderer();
  utils.render(<Connection></Connection>);
});
