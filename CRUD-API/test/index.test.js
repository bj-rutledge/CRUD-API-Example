/**
 * Created by BJ Rutledge 
 * 2023-10-11
 */


const path = require('path'); 
const dotEnvPath = path.resolve(__dirname, '../env/.env');
const dotenv = require('dotenv').config({path: dotEnvPath});
if(dotenv.error){
   throw dotenv.error;
}

require('./tests/getTypetTest');
require('./tests/mongodbTest'); 
require('./tests/orderTest');