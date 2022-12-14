import { readDatabase } from '../data/import_db.js';
import fs from 'fs';

let products = readDatabase("./data/db.txt");

export function removeProductById(id) {
    let product_match = false;
    let tempArray = products;
    // loop through products data
    for(let i = 0; i < products.length; i++) {
        // check for id match
        if(products[i].id == id) {
            product_match =  true;
            tempArray.slice(i, 1)
            // delete contents of db.txt
            fs.truncate("../data/db.txt", function(){});
            // loop through tempArray
            // for each item convert it to json string, then write that string to db.txt

            products = tempArray;
            return products;
        }
    }
    // if no match, return empty object
    if(!product_match) {
        return {};
    }
}