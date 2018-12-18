/*
*   Tests for proper function of utils.js
*/

import { formatPrice } from "../utils";

describe("formatPrice", () => {
  it("Passes happy path", () => {
    const formatted = formatPrice(1200);
    expect(formatted).toBe("$12.00");
  });
  it("Correctly formats amount less than $1", () => {
    const formatted = formatPrice(12);
    expect(formatted).toBe("$0.12");
  });
  it("Correctly formats $0", () => {
    const formatted = formatPrice(0);
    expect(formatted).toBe("$0.00");
  });
  it("Correctly formats cents with tens place set", () => {
    const formatted = formatPrice(1210);
    expect(formatted).toBe("$12.10");
  });
  it("Correctly formats single digit cent", () => {
    const formatted = formatPrice(7);
    expect(formatted).toBe("$0.07");
  });
});
