describe("Hello world", function() {
  it("says hello world", function() {
    expect(helloWorld()).toEqual("hello world");
  });

  it("says hello world as string", function() {
    expect(helloWorld()).toContain("hell");
  });
})
