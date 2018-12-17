/*
*   Tests for proper function of PaginationProvider.js
*/

import { shallow, mount } from "enzyme";
import PaginationProvider from "../components/PaginationProvider";

const awaitPromises = () => new Promise(resolve => setImmediate(resolve()));

describe("PaginationProvider component", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it("calls api on mount", async () => {
    fetch.mockResponse({ empty: true });
    const wrapper = await shallow(
      <PaginationProvider resource="/items">
        {({ loading }) => <p>{loading}</p>}
      </PaginationProvider>
    );
    expect(fetch.mock.calls.length).toBe(1);
  });
});
