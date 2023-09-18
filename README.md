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
- `Number` orderNumber
- `Array` of `Product` objects named `items`
- `Number` customerNumber
- `Number` orderTotal

##### Instantiation Example
```javascript
const date = new Date(); 
const ordNum = 1234;
const products = [product1, product2, product3]; // Array of Product
const customerNumber = 24; // Each order is linked to a customer account

const order = new Order(date, ordNum, products, customerNumber); 
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
```

Certainly, here's the documentation in Markdown format for the `Customer` and `Employee` schemas and data models using Mongoose and MongoDB in Node.js:

### Customer Schema

The `customerSchema` represents the schema for the Customer model. It defines the structure and constraints for storing customer information in the MongoDB database.

#### Fields

- `number` (Number): The unique customer number.
  - Type: Number
  - Required: Yes
- `first` (String): The first name of the customer.
  - Type: String
  - Minimum Length: 2 characters
  - Maximum Length: 20 characters
  - Required: Yes
- `mi` (String): The middle initial of the customer (optional).
  - Type: String
  - Maximum Length: 1 character
- `last` (String): The last name of the customer.
  - Type: String
  - Minimum Length: 2 characters
  - Maximum Length: 20 characters
  - Required: Yes
- `taxable` (Boolean): Indicates if the customer is taxable.
  - Type: Boolean
  - Required: Yes
- `orders` (Array of Number): An array of order numbers associated with the customer. Orders will be stored seperatly. 


### Employee Schema

The `employeeSchema` represents the schema for the Employee model. It defines the structure and constraints for storing employee information in the MongoDB database.

#### Fields

- `number` (Number): The unique employee number.
  - Type: Number
  - Required: Yes
- `first` (String): The first name of the employee.
  - Type: String
  - Minimum Length: 2 characters
  - Maximum Length: 20 characters
  - Required: Yes
- `mi` (String): The middle initial of the employee (optional).
  - Type: String
  - Maximum Length: 1 character
- `last` (String): The last name of the employee.
  - Type: String
  - Minimum Length: 2 characters
  - Maximum Length: 20 characters
  - Required: Yes
- `hireDate` (Date): The date when the employee was hired.
  - Type: Date
  - Required: Yes
- `terminationDate` (Date): The date when the employee was terminated (optional).

### Data Models

- `Customer`: A Mongoose model based on the `customerSchema`. It represents customer data in the MongoDB database.

- `Employee`: A Mongoose model based on the `employeeSchema`. It represents employee data in the MongoDB database.

These schemas and data models are designed to provide a structured way to store and manipulate customer and employee data within your Node.js application using MongoDB and Mongoose.