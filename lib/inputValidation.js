const validateTeamName = input => (input.trim() ?
                                   true :
                                   "The team name must have at least 1 non-whitespace character.");

const validateEmployeeName = input => (input.trim() ?
                                       true :
                                       "The team member's name must have at least 1 non-whitespace character.");

const validateId = input => {
  if (isNaN(input)) {
    return "The team member's ID must be a whole number.";
  } else if (input < 0) {
    return "The team member's ID may not be a negative."
  } else if (Math.floor(input) !== input) {
    return "The team member's ID must be a whole number."
  }
  return true;
}

const validateEmail = input => {
  input = input.trim();
  if (!input) return true; // allow for non-answer
  
  // test by simple regex pattern that requires at least 1 alphanumeric character on each side of an atmark
  const emailPattern = /[a-z0-9]@[a-z0-9]/i;
  if (!emailPattern.test(input)) {
    return "Email address was not valid. Please type it in again."
  }

  return true;
}

module.exports = {
  validateTeamName,
  validateEmployeeName,
  validateId,
  validateEmail
}