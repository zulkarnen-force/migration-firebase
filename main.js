import { fire } from "./config.js"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import * as fs from 'fs';



let db = getFirestore(fire)

let products = collection(db, 'products');
const productsSnapshots = await getDocs(products);
const listProducts = productsSnapshots.docs.map(doc => doc.data());


let productsJSON = JSON.stringify(listProducts)

fs.writeFileSync('file.json', productsJSON); 