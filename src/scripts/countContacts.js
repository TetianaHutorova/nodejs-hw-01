import { readContacts } from "../utils/readContacts.js";
export const countContacts = async () => {
    try {
        const contacts = await readContacts();
        return console.log(`The number of contacts is ${contacts.length}`);;
    } catch (error) {
        console.error(error);
    }
};

countContacts();
