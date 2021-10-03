const inputValidation = require('../lib/inputValidation.js');

describe("validateTeamName", () => {
  it("should return true if the input has at least 1 non-whitespace character", () =>{
    expect(inputValidation.validateTeamName("My Team")).toStrictEqual(true);
    expect(inputValidation.validateTeamName(" My Team ")).toStrictEqual(true);
    expect(inputValidation.validateTeamName("")).not.toStrictEqual(true);
    expect(inputValidation.validateTeamName(" ")).not.toStrictEqual(true);
  });
});