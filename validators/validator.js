
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
          minLength: 'name must be at least 2 characters.'
        }
      }
    },
    required: ['name'],
    errorMessage: {
      required: {
        'name': 'yoyoyoyoyoyo You must enter a name'
      }
    }
  }

  const validate = ajv.compile(schema);
  validate(req.body);

  res.locals.errors = validate.errors;

  // console.log(`Error(s) found, and they are:`);
  // validate.errors.forEach(error=>console.log(`# ${error.message}`))
  // console.log(`errors stored in res.locals.errors are: ${res.locals.errors[0].message}`);

  // res.status(401).json(res.locals.errors);

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
          minLength: 'name of food must be at least 2 characters.'
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