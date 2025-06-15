import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const contacts = await readContacts();
  try {
    const newContact = createFakeContact();
    await writeContacts([...contacts, newContact]);
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
