import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts =await readContacts();
  const contactsArray = [];
  try {
     for (let index = 0; index < number; index++) {
      contactsArray.push(createFakeContact());
      console.log("Contacts are added");
    }
    await writeContacts([...contacts,...contactsArray]);
  } catch (error) {
    console.error(error);
    console.log("Bleat");
  }
};

generateContacts(5);
