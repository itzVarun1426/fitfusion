import { Client, Databases, Account, Storage, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export const conf = {
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    pricingCollectionId: import.meta.env.VITE_APPWRITE_PRICING_COLLECTION_ID,
    inspireCollectionId: import.meta.env.VITE_APPWRITE_INSPIRE_COLLECTION_ID,
    trainersCollectionId: import.meta.env.VITE_APPWRITE_TRAINERS_COLLECTION_ID,
    bucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
};

export { ID };