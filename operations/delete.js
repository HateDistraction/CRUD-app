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
            tempArray.splice(i, 1);
            // delete contents of db.txt
            fs.writeFile('./data/db.txt', '', null, function() {});
            // loop through tempArray
            for(let i = 0; i < tempArray.lenght; i++) {
                // for each item convert it to json string, then write that string to db.txt
                let obj = JSON.stringify(tempArray[i]);
                fs.appendFile("./data/db.txt", obj+"\n", err => {if(err) console.error(err)})
            }

            products = tempArray;
            return products;
        }
    }
    // if no match, return empty object
    //if(!product_match) {
    //    return {};
    //}
}