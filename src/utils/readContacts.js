import  fs  from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

 
export const readContacts = async () => {
  try {
    const data = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
    return data;
   } catch (err) {
    console.error(err); 
  }
};

  