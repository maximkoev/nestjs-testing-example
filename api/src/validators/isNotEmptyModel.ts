/**
 * Copyright 2021 American Well Systems
 * All rights reserved.
 * It is illegal to use, reproduce or distribute
 * any part of this Intellectual Property without
 * prior written authorization from American Well.
 */

import {
  isEmpty,
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import { Product } from '../types';
import { ValidationErrorCode } from '../data/ValidationErrorCode';

export function IsNotEmptyModel(validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      name: 'isNotEmptyModel',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(product: Product, args: ValidationArguments) {
          const model = product.model;
          if (model?.length == 0 || isEmpty(model)) {
            return false;
          }
          return true;
        },
        defaultMessage(args: ValidationArguments) {
          return ValidationErrorCode.requiredModel.toString();
        },
      },
    });
  };
}
