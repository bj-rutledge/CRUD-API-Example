'use strict';
/** Created by BJ Rutledge
 * 8/20/2023
 **/
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.DB_URI;

const client = new MongoClient(uri, {
   serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
   },
});

function verifyConnection() {
   return new Promise(async (resolve, reject) => {
      try {
         // Connect the client to the server (optional starting in v4.7)
         await client.connect();
         // Send a ping to confirm a successful connection
         await client.db(process.env.DB_USER).command({ ping: 1 });
         resolve(client); // Resolve the promise
      } catch (error) {
         reject(error); // Reject the promise with the error
      }
   });
}

verifyConnection()
   .then(
      console.debug(
         'Pinged your deployment. You successfully connected to MongoDB!'
      )
   )
   .catch((error) => console.error('DB Connection failed.', error));

const db = {
   client: client,
   close: client.close,
};

module.exports = db;
