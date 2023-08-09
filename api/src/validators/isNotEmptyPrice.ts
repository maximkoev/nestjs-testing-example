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

export function IsNotEmptyPrice(validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      name: 'isNotEmptyPrice',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(product: Product, args: ValidationArguments) {
          const price = product.price;
          if (price == 0 && price < 0 && isEmpty(price)) {
            return false;
          }
          return true;
        },
        defaultMessage(args: ValidationArguments) {
          return ValidationErrorCode.requiredPrice.toString();
        },
      },
    });
  };
}
