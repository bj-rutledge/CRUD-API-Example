//todo implement error handling
'use strict';
/**
 * Created by BJ Rutledge
 * Date:11/26/23
 * Route testing.
 **/
const axios = require('axios');
const exp = require('constants');

describe('get-customer GOOD QUERY.', () => {
   it('Should retrieve customer record.', async () => {
      const goodQueryUri = `http://localhost:3001/get-customer?email=bob@bob.com`;

      const data = {
         data: {
            _id: '65637ec5b2f829e29f8a8d4f',
            firstName: 'Bob',
            lastName: 'Jones',
            middleInitial: 'J',
            email: 'bob@bob.com',
            phone: '555-555-5555',
            taxable: true,
            orders: [1233131313]
         }
      };

      const res200GoodQuery = await axios.get(goodQueryUri);

      expect(res200GoodQuery).toBeTruthy();
      expect(res200GoodQuery._id).toBe(data._id);
      expect(res200GoodQuery.status).toBe(200);
   });
});

describe('get-customer failure DATA NOT FOUND.', () => {
   it('Should receive status code 204 for not receiving data.', async () => {
      const badQueryUri =
         'http://localhost:3001/get-customer?email=bad@email.com';
      const res204BadQuery = await axios.get(badQueryUri);

      expect(res204BadQuery).toBeTruthy();
      expect(res204BadQuery.status).toBe(204);
   });
});
