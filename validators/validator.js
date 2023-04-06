
const cuisineFormValidator = (req, res, next) => {
  const Ajv = require('ajv');
  const ajv = new Ajv({
    allErrors: true,
    coerceTypes: true,
    useDefaults: 'empty'
  });

  require('ajv-keywords')(ajv);
  require('ajv-formats')(ajv);
  require('ajv-errors')(ajv);


  const schema = {
    type: 'object',
    transform: ['trim'],
    properties: {
      name: {
        type: 'string',
        minLength: 2,
        errorMessage: {
          minLength: 'Name of cuisine must be at least 2 characters.'
        }
      }
    },
    required: ['name'],
    errorMessage: {
      required: {
        'name': 'You must enter a cuisine name.'
      }
    }
  }

  const validate = ajv.compile(schema);
  validate(req.body);
  res.locals.errors = validate.errors;

  next();
}

const foodFormValidator = (req, res, next) => {
  const Ajv = require('ajv');
  const ajv = new Ajv({
    allErrors: true,
    coerceTypes: true,
    useDefaults: 'empty'
  });

  require('ajv-keywords')(ajv);
  require('ajv-formats')(ajv);
  require('ajv-errors')(ajv);

  const schema = {
    type: 'object',
    transform: ['trim'],
    properties: {
      name: {
        type: 'string',
        minLength: 2,
        errorMessage: {
          minLength: 'Name of food must be at least 2 characters.'
        }
      },
      description: {
        type: 'string',
        maxLength: 300,
        errorMessage: {
          maxLength: 'food description can not be more than 300 characters'
        }
      }
    },
    required: ['name'],
    errorMessage: {
      required: {
        'name': 'You must enter a food name'
      }
    }
  }
  

  const validate = ajv.compile(schema);
  validate(req.body);

  res.locals.errors = validate.errors;

  next();

}


module.exports = {
  cuisineFormValidator,
  foodFormValidator
}