import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(contacts);
    return contacts;
  } catch (error) {
    console.error(error);
  }
};

getAllContacts();
