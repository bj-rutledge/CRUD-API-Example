'use strict';
/**
 * Created by BJ Rutledge
 * Date:2023-10-14
 **/

const roundTwoDecimal = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

module.exports = roundTwoDecimal;
