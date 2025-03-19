import { expect } from "vitest";
import { sum } from "../sum"

//simple javascript testing
test("Sum function should calculate sum of twor functions", () => {
    //Implementation of test cases
    const result = sum(2, 3);

    //check result the below line is called assertion
    expect(result).toBe(5);
})