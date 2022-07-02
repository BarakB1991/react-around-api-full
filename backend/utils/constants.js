const SALT = 10;

const validate = require('validator');
const isURLValid = (value, helpers) => {
  if (
    validate.isURL(value, {
      require_protocol: true,
      allow_underscores: true,
    })
  ) {
    return value;
  }
  helpers.error('string.uri');
  return;
};

module.exports = {
  SALT,
  isURLValid,
};
