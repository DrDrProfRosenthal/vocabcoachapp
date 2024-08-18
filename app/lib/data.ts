import { sql } from '@vercel/postgres';
import {
  VocabFormat,
} from './definitions';

export async function fetchVocabs() {
  
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

   //  console.log('Fetching vocab data...');
 //    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<VocabFormat>`SELECT * FROM vocabs`;

  //  console.log('Data fetch completed after 3 seconds.');

    return data;
  } catch (error) {
    console.error('Database Error:', error);
   throw new Error('Failed to fetch revenue data.');
  }
}