import { describe, expect, it } from "bun:test";
import { generateUniqueSlug, slugify } from "../src/utils/slugify";

describe("slugify", function () {
  it("converts 'Hello World!' to 'hello-world'", function () {
    const result = slugify("Hello World!");
    expect(result).toBe("hello-world");
  });
});

describe("generateUniqueSlug", function () {
  it("increments suffix when slug exists", function () {
    const result = generateUniqueSlug("test", ["test", "test-1"]);
    expect(result).toBe("test-2");
  });
});
