import fsSync from 'fs';
import fs from 'fs/promises';
import { printSchema } from 'graphql/utilities';
import path from 'path';

import { schema } from '../src/schema';

const pwd = process.cwd();

const schemaFile = 'schema.graphql';

const generateSchema = async () => {
  const configs = [{ schema, path: path.join(pwd, './graphql', schemaFile) }];

  for (const config of configs) {
    const dirPath = config.path.split(schemaFile)[0];

    if (!fsSync.existsSync(dirPath)) {
      await fs.mkdir(dirPath);
    }

    await fs.writeFile(config.path, printSchema(config.schema));
  }
};

generateSchema();
