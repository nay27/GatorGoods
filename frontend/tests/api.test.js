import Api from "../api";
import { BACKEND_API_URL, DEV_API_URL } from "../config";

describe("api wrapper", () => {
  it("chooses server url in prod", () => {
    // it is possible that a bug could arise by not checking the following line
    // however currently we need the same url in dev and prod
    // expect(BACKEND_API_URL).not.toBe(DEV_API_URL);
    const node_env = process.env.NODE_ENV;
    process.env.NODE_ENV = "production";
    const fetchMock = jest.fn();
    const api = Api(fetchMock);
    api("/users/");
    expect(fetchMock.mock.calls[0][0]).toBe(`${BACKEND_API_URL}/users/`);
    process.env.NODE_ENV = node_env;
  });
  it("chooses dev url otherwise", () => {
    const node_env = process.env.NODE_ENV;
    process.env.NODE_ENV = null;
    const fetchMock = jest.fn();
    const api = Api(fetchMock);
    api("/items/");
    expect(fetchMock.mock.calls[0][0]).toBe(`${DEV_API_URL}/items/`);
    process.env.NODE_ENV = node_env;
  });
});
