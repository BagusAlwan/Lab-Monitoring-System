import { addRowToSheet } from '@/server/sheets.mjs'; // Import your addRowToSheet function

export async function POST(req) {
  const body = await req.body;
  console.log(body);

  // Extract the data from the request body
  const { nim, nama, action, waktu } = body;

  try {
    // Call addRowToSheet with the extracted data
    await addRowToSheet(nim, nama, action, waktu);
    console.log('Row added successfully');
    return new Response('OK');
  } catch (error) {
    console.error('Error adding row:', error);
    return new Response('Error', { status: 500 });
  }
}
