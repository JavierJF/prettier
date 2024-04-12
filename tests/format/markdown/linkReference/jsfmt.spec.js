runFormatTest(import.meta, ["markdown"], { proseWrap: "always" });
runFormatTest(import.meta, ["markdown"], {
  breakDefinitions: false,
  proseWrap: "always"
});
runFormatTest(import.meta, ["markdown"], { proseWrap: "never" });
