import { Request } from 'express';
import { Result, ValidationError, validationResult } from 'express-validator';

export const expressValidator = (req: Request): ValidationError[] => {
  const errors: Result<ValidationError> = validationResult(req);
  const messages: ValidationError[] = [];
  if (!errors.isEmpty()) {
    for (const error of errors.array()) {
      messages.push(error);
    }
  }
  return messages;
};
