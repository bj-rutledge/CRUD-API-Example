'use strict'; 
/**
 * Created by BJ Rutledge 
 * 2023-09-19
 */

const getType = (obj) => {
   const _typeof = typeof obj;
   if(_typeof != 'object'){
      return _typeof;
   }
   /**The obj prototype toString call returns a string 
    * that is in the following format:
    * [object ObjectType] [class TypeName], etc. 
    * This line, gets the string and pulls out the 
    * object/class name. 
    * Note: For objects that are defined using standard 
    * object instantiation practices, eg. 
    * const myObj = {prop: 'myProp'}
    * the return value of this will: 
    * Object, where 'O' is case capatalized. 
    */
   return Objeccode.prototype.toString.call(obj).split(' ')[1].slice(0, -1);
}

module.exports = getType; 


