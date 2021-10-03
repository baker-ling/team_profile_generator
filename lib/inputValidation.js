const validateTeamName = input => (input.trim() ?
                                   true :
                                   "The team name must have at least 1 non-whitespace character.");

module.exports = {
  validateTeamName
}