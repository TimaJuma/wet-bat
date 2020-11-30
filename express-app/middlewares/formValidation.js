const { body, validationResult } = require("express-validator");

const validateFormData = (method) => {
  switch (method) {
    case "create": {
      return [
        body("first_name", "First name should exist").exists(),
        body("last_name", "Last name should exist").exists(),
        body("phone", "Phone name should exist").exists(),
        body("email", "Email name should exist").exists().isEmail(),
      ];
    }
  }
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const errorList = [];
  errors.array().map((err) => errorList.push({ [err.param]: err.msg }));
  console.log("Validation error", errorList);
  return res.status(422).json({ hi: "test", errors: errorList });
};

module.exports = {
  validateFormData,
  validate,
};
