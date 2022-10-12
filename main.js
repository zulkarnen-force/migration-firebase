import { fire } from "./fire.js"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import * as fs from 'fs';

let db = getFirestore(fire)

const toJSONFile = async function(collectionsNames = [])  {

    for (const collectionName of collectionsNames) {
        let fireCollection = collection(db, collectionName);
        const productsSnapshots = await getDocs(fireCollection);
        const listCollection = productsSnapshots.docs.map(doc => doc.data());
        let collectionJSON = JSON.stringify(listCollection)
        fs.writeFileSync(`${collectionName}.json`, collectionJSON); 
    }
    
}

let ls = ["products", "cusomers"]
toJSONFile(ls)
