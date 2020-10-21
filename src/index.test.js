const { hasEducationalTld } = require("./");

describe("is-educational-email-domain", () => {
  test("hasEducationalTld", () => {
    expect(hasEducationalTld("stanford.edu")).toBe(true);
    expect(hasEducationalTld("stanford.edu.jp")).toBe(false);

    expect(hasEducationalTld("xyz.edu.ge")).toBe(true);
    expect(hasEducationalTld("xyz.edu.xx")).toBe(false);

    expect(hasEducationalTld("iuj.ac.jp")).toBe(true);
    expect(hasEducationalTld("bla.ac")).toBe(false);
  });
});
