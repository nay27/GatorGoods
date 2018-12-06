import api, { categoryIdFromUrl, getCategories } from "../api";
import { BACKEND_API_URL, DEV_API_URL, TEST_API_URL } from "../config";

describe("api wrapper", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it("chooses test url in tests", async () => {
    await api("/testing");
    expect(fetch.mock.calls[0][0]).toBe(`${TEST_API_URL}/testing`);
  });
  it("chooses server url in prod", () => {
    // make sure the test url is actually discernable from prod url
    expect(TEST_API_URL).not.toBe(BACKEND_API_URL);
    const node_env = process.env.NODE_ENV;
    process.env.NODE_ENV = "production";
    api("/users/");
    expect(fetch.mock.calls[0][0]).toBe(`${BACKEND_API_URL}/users/`);
    process.env.NODE_ENV = node_env;
  });
  it("chooses dev url otherwise", () => {
    const node_env = process.env.NODE_ENV;
    process.env.NODE_ENV = null;
    api("/items/");
    expect(fetch.mock.calls[0][0]).toBe(`${DEV_API_URL}/items/`);
    process.env.NODE_ENV = node_env;
  });
});

describe("getCategories", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it("fetches the correct data", async () => {
    const nestedData = [
      {
        id: 1,
        name: "books",
        created: "2018-11-17T00:00:05.706945Z",
        modified: "2018-11-17T00:00:05.706980Z",
        enabled: true
      },
      {
        id: 2,
        name: "electronics",
        created: "2018-11-17T00:00:20.269718Z",
        modified: "2018-11-17T00:00:20.269753Z",
        enabled: true
      },
      {
        id: 3,
        name: "grocery",
        created: "2018-11-17T00:00:41.956316Z",
        modified: "2018-11-17T00:00:41.956348Z",
        enabled: true
      }
    ];
    fetch.mockResponseOnce(
      JSON.stringify({
        count: 3,
        next: null,
        previous: null,
        results: [
          {
            id: 1,
            name: "books",
            created: "2018-11-17T00:00:05.706945Z",
            modified: "2018-11-17T00:00:05.706980Z",
            enabled: true
          },
          {
            id: 2,
            name: "electronics",
            created: "2018-11-17T00:00:20.269718Z",
            modified: "2018-11-17T00:00:20.269753Z",
            enabled: true
          },
          {
            id: 3,
            name: "grocery",
            created: "2018-11-17T00:00:41.956316Z",
            modified: "2018-11-17T00:00:41.956348Z",
            enabled: true
          }
        ]
      })
    );
    const categories = await getCategories();
    expect(fetch.mock.calls.length).toBe(1);
    expect(categories).toEqual(nestedData);
    expect(fetch.mock.calls[0][0]).toBe(`${TEST_API_URL}/categories/`);
  });
});

describe("categoryIdFromUrl", () => {
  it("correctly strips out id", () => {
    const id = categoryIdFromUrl(`${TEST_API_URL}/categories/42/`);
    expect(id).toBe(42);
  });
  it("works without trailing slash", () => {
    const id = categoryIdFromUrl(`${TEST_API_URL}/categories/2`);
    expect(id).toBe(2);
  });
  it("returns null when id is not present", () => {
    const id = categoryIdFromUrl(`${TEST_API_URL}/categories/`);
    expect(id).toBe(null);
    const idNoSlash = categoryIdFromUrl(`${TEST_API_URL}/categories`);
    expect(idNoSlash).toBe(null);
  });
});
