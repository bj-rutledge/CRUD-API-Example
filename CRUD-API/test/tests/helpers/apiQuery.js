'use strict';
/**
 * Created by BJ Rutledge
 * Date:11/26/23
 **/

const apiQuery = async (query) => {
   const uri = `http://localhost:3000/api/v1/search?${query}`;
   return await axios.get(uri);
};

module.exports = apiQuery;
