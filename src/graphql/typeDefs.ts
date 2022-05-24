import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { join } from 'path';

const typesArray = loadFilesSync(join(__dirname, 'modules/**/*.gql'));

export const typeDefs = mergeTypeDefs(typesArray);
