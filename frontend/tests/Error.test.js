/*
*   Tests for proper function of error.js
*/

import Error from "../components/Error";
import { shallow } from "enzyme";

describe("Error component", () => {
  it("doesn't render when passed null", () => {
    const error = shallow(<Error />);
    expect(error).toMatchSnapshot();
    expect(error.children()).toHaveLength(0);
  });
  it("renders when passed an error message", () => {
    const error = shallow(<Error error={{ message: "An Error" }} />);
    expect(error).toMatchSnapshot();
    expect(error.children()).not.toHaveLength(0);
  });
});
