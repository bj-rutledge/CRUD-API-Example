'use strict';
/**
 * Created by Stephen Awuah
 * Date: 2023-10-11
 **/

const Product = require('../../lib/DataTypes/product');
//todo emplement error handler
describe('Product', () => {
   it('should create a product with correct properties and price', () => {
      const product = new Product(
         123,
         50,
         1.5,
         80,
         false,
         'Example Product',
         'This is an example product.',
      );

      expect(product.number).toBe(123);
      expect(product.cost).toBe(50);
      expect(product.markup).toBe(1.5);
      expect(product.listPrice).toBe(80);
      expect(product.sellAtList).toBe(false);
      expect(product.productName).toBe('Example Product');
      expect(product.productDescription).toBe('This is an example product.');

      // Check if price is calculated correctly
      expect(product.price).toBe(75); // cost * markup = 50 * 1.5 = 75
   });

   it('should set default markup if provided markup is below 1.5', () => {
      const product = new Product(
         123,
         50,
         1.2,
         80,
         false,
         'Example Product',
         'This is an example product.',
      );

      expect(product.markup).toBe(1.5);
   });

   it('should handle invalid arguments', () => {
      // Mock console.error to capture logs
      const consoleErrorMock = jest
         .spyOn(console, 'error')
         .mockImplementation(() => {});

      const invalidProduct = new Product(
         'invalid',
         'invalid',
         'invalid',
         'invalid',
         'invalid',
         'invalid',
         'invalid',
      );

      // Ensure an error message is logged
      expect(consoleErrorMock).toHaveBeenCalledWith(
         'Invalid arguments.',
         'invalid',
         'invalid',
         'invalid',
         'invalid',
         'invalid',
         'invalid',
         'invalid',
      );

      // Restore console.error
      consoleErrorMock.mockRestore();
   });
});
