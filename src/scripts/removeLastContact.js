import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.pop();
      await writeContacts(contacts);
      console.log("Last contact is deleted");
    } else {
      throw new Error('Contacts list is empty, nothing to remove.');
    }
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
