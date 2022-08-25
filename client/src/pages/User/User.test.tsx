import ShallowRenderer from "react-test-renderer/shallow";
import { User } from "./User";

beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(() => {
  jest.clearAllMocks();
});

it("renders User without crashing", () => {
  const utils = ShallowRenderer.createRenderer();
  utils.render(<User></User>);
});
