const inputValidation = require('../lib/inputValidation.js');

describe("validateTeamName", () => {
  it("should return true if the input has at least 1 non-whitespace character", () => {
    expect(inputValidation.validateTeamName("My Team")).toStrictEqual(true);
    expect(inputValidation.validateTeamName(" My Team ")).toStrictEqual(true);
  });
  it("should not return true if the input does not have at least 1 non-whitespace character", () => {
    expect(inputValidation.validateTeamName("")).not.toStrictEqual(true);
    expect(inputValidation.validateTeamName(" ")).not.toStrictEqual(true);
  })
});

describe("validateEmployeeName", () => {
  it("should return true if the input has at least 1 non-whitespace character", () => {
    expect(inputValidation.validateEmployeeName("John Doe")).toStrictEqual(true);
    expect(inputValidation.validateEmployeeName(" John Doe ")).toStrictEqual(true);
  });
  it("should not return true if the input does not have at least 1 non-whitespace character", () => {
    expect(inputValidation.validateEmployeeName("")).not.toStrictEqual(true);
    expect(inputValidation.validateEmployeeName(" ")).not.toStrictEqual(true);
  })
});

describe("validateId", () => {
  it("should return true if the input has can be parsed to a non-negative integer", () => {
    expect(inputValidation.validateId("0")).toStrictEqual(true);
    expect(inputValidation.validateId("3241 a")).toStrictEqual(true);
  });
  it("should not return true if the input cannot be parsed to a number", () => {
    const input = "Blah";
    expect(inputValidation.validateId(input)).not.toStrictEqual(true);
  });
  it("should not return true if the input parsed to a number is negative", () => {
    const input = "-1";
    expect(inputValidation.validateId(input)).not.toStrictEqual(true);
  });
});

describe("validateEmail", () => {
  it("should return true if the input has no non-whitespace characters", () => {
    expect(inputValidation.validateEmail("")).toStrictEqual(true);
    expect(inputValidation.validateEmail(" ")).toStrictEqual(true);
  });
  it("should return true if the input has an atmark (@) with at least one alphanumeric character on each side", () => {
    expect(inputValidation.validateEmail("a@a")).toStrictEqual(true);
    expect(inputValidation.validateEmail(" a@a ")).toStrictEqual(true);
  });
  it("should not return true if the input has at least 1 non-whitespace character but not an atmark with at least one alphanumeric on each side", () => {
    expect(inputValidation.validateEmail("aa")).not.toStrictEqual(true);
    expect(inputValidation.validateEmail(" a @a ")).not.toStrictEqual(true);
  })
});