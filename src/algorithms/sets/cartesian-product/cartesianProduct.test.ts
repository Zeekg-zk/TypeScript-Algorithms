import cartesianProduct from "./cartesianProduct";

describe("cartesianProduct", () => {
  it("should calculate the product of two sets", () => {
    const product1 = cartesianProduct([1], [1]);
    const product2 = cartesianProduct([1, 2], [3, 5]);

    expect(product1).toEqual([[1, 1]]);
    expect(product2).toEqual([
      [1, 3],
      [1, 5],
      [2, 3],
      [2, 5],
    ]);
  });
});
