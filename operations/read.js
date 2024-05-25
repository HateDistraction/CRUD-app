// Import data from our import_db.js
import { readDatabase } from '../data/import_db.js';

let products = readDatabase("./data/db.txt");

// read info on ONE product, by its ID
// build a FUNCTION that can be called by other parts of your program, when you need info on a product

export function getProductById(id) {
    var product_match = false;
    // loop through products data
    for(let i = 0; i < products.length; i++) {
        // check for id match
        if(products[i].id == id) {
            product_match = true;
            // return; immeddiately exits out of function and sends product back
            return products[i];
        }
    }
    // if no match, return empty object
    if(!product_match) {
        return {};
    }
}

// read info on ALL products
export function getAllProducts() {
    return products;
}