import { somma } from "../src/index";
import { expect, test } from "bun:test";

test("test somma ok", () => {
    expect(somma(2, 3)).toBe(5);
});
