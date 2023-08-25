import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { readFileSync } from 'fs';
 
const data = readFileSync('secret.json', 'utf8');
const creds = JSON.parse(data);

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
];

const jwt = new JWT({
  email: creds.client_email,
  key: creds.private_key,
  scopes: SCOPES,
});


async function addRowToSheet(nim, nama, action, waktu) {
    const doc = new GoogleSpreadsheet('1GTvhgEHVrt_YloDFUd66hDHiuqar0EIWA07_IDMcnBk', jwt);
    await doc.loadInfo(); 
    const sheet = doc.sheetsByIndex[0]; 
    await sheet.addRow({ NIM: nim, Nama: nama, Action: action, Waktu: waktu });
}

async function addRowToSheet2(nim, nama, barang) {
  const doc = new GoogleSpreadsheet('1GTvhgEHVrt_YloDFUd66hDHiuqar0EIWA07_IDMcnBk', jwt);
  await doc.loadInfo(); 
  const sheet = doc.sheetsByIndex[1]; 
  await sheet.addRow({ NIM: nim, Nama: nama, Barang: barang });
}

export default {
  addRowToSheet,
  addRowToSheet2
};

 addRowToSheet('22/492140/PA/21072', 'Bagus Alwan', 'Masuk', '15:00')
   .then(() => {
     console.log('Row added successfully');
   })
   .catch((error) => {
     console.error('Error adding row:', error);
   });

   addRowToSheet2('22/492140/PA/21072', 'Bagus Alwan', 'Computer besar')
   .then(() => {
     console.log('Row added successfully');
   })
   .catch((error) => {
     console.error('Error adding row:', error);
   });
