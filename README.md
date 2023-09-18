# CRUD-API-Example

## Description

This project serves as a simple example of a CRUD (Create, Read, Update, Delete) API. It utilizes a MongoDB database hosted on Atlas for data storage.

## Functionality

It features a Node.js and Express server with routes that enable the creation, reading, updating, and deletion of records for a fictional business.

**Note**: This project is currently under development, and the documentation will continue to be updated as development progresses.


## Routes 
###  Under development 



## Data Structures

### Customer

#### Properties
- `Number` ID
- `String` firstName
- `String` lastName
- `String` email
- `String` phone
- `Array` of `Order` objects

### Employee

#### Properties
- `Number` id
- `String` firstName
- `String` lastName
- `String` email
- `String` phone

### Order

#### Properties
- `Date` date
- `Array` of `Product` objects named `items`
- `Number` customerNumber
- `Number` orderTotal

##### Instantiation Example
```javascript
const date = new Date(); 
const products = [product1, product2, product3]; // Array of Product
const customerNumber = 24; // Each order is linked to a customer account

const order = new Order(date, products, customerNumber); 
// Get the total for the order
console.log(order.orderTotal);
```
### Product

#### Properties
- `Number` number
- `Number` cost 
- `Number` markup
- `Number` listPrice 
- `Boolean` sellAtList 
- `Number` price 

##### Instantiation Example
```javascript
const productNum = 22; 
const cost = 5.00;
const markup = 2.5;
const list = 6.22;
const sellAtList = false; 
const productName = 'My Widget';
const productDescription = 'My Widget is so cool!';

const product = new Product(productNum, cost, markup, list, sellAtList, productName, productDescription); 
/** If sellAtList === true, the price is set to list;
  * otherwise, it will be markup * cost.
  * The default markup is 1.5. If the provided markup is below 
  * the default, the default value is used. 
  */ 
console.log(product.price);
