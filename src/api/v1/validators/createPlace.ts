import { check, ValidationChain } from 'express-validator';

// country_id: 1,
//   description: 'dsfsdfdsfdsf',
//   name: 'dfsfdsfdsf',
//   location: 'SRID=4326;POINT(32.610168 25.728158)',
export const createPlaceValidator = (): ValidationChain[] => [
  check('name').notEmpty().withMessage('name is required'),
  check('name')
    .isAlpha('en-US', { ignore: ' ' })
    .withMessage('name should be alp characters'),
  check('description').notEmpty().withMessage('description is required'),
  check('description')
    .isAlpha('en-US', { ignore: ' ' })
    .withMessage('description should be alp characters'),
  check('location').notEmpty().withMessage('location is required'),
  check('country_id').notEmpty().withMessage('country_id is required'),
  check('country_id').isNumeric().withMessage('country_id must be a number.'),
];
