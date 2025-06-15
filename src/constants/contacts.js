import path from 'node:path';
import { fileURLToPath } from 'node:url';

// export const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json');

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const PATH_DB = path.join(dirname, '..', 'db', 'db.json');

 