import { check } from 'express-validator/check';

export const newReport = [
  check('comment')
    .isString().withMessage('Comment Must be only alphabetical characters')
    .isLength({ min: 10, max: 100 })
    .withMessage('Comment Must be at least 10 characters long'),
  check('location')
    .isLatLong()
    .withMessage('Enter a valid Location e.g 0.543, 3.654'),
];

export const updateLocation = [
  check('location')
    .isLatLong()
    .withMessage('Enter a valid Location e.g 0.543, 3.654'),
];

export const updateComment = [
  check('comment')
    .isString().withMessage('Comment Must be only alphabetical characters')
    .isLength({ min: 10, max: 100 })
    .withMessage('Comment Must be at least 10 alphabetical characters long'),
];
