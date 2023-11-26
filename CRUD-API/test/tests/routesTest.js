'use strict';
/**
 * Created by BJ Rutledge
 * Date:11/26/23
 * Route testing.
 **/
//todo implement error handling
const axios = require('axios');
const querystring = require('querystring');
const apiQuery = require('./helpers/apiQuery');

jest.mock(axios);

describe('Query data', () => {
   it('Should retrieve records from the database via API call', async () => {
      const query = querystring.stringify({
         email: 'bob@bob.com',
      });

      const data = {
         data: {
            _id: '65637ec5b2f829e29f8a8d4f',
            firstName: 'Bob',
            lastName: 'Jones',
            middleInitial: 'J',
            email: 'bob@bob.com',
            phone: '555-555-5555',
            taxable: true,
            orders: [1233131313],
         },
      };
      axios.get.mockImplementation(() => Promise.resolve(data));

      await expect(apiQuery(data)).resolves().toEqual(data);

      await expect(apiQuery(query)).toHaveBeenCalledWith(
         `http://localhost:3000/api/v1/search?${query}`
      );

      const invalidQuery = querystring.stringify({
         email: 'foo@bar.com',
      });

      it('Fails to fetch data', async () => {
         const errorMessage = 'No data found';
         axios.get.mockImplementationOnce(() => {
            Promise.reject(new Error(errorMessage));
         });

         await expect(apiQuery(invalidQuery)).rejects.toThrow(errorMessage);
      });
   });
});
