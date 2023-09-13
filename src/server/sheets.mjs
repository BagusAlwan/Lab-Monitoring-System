import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { readFileSync } from 'fs';

//connect to Spreadsheet 
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


//Functions

//Sheet indexes 
const inOutIndex = 0; 
const toolsIndex = 1; 
const visitorsdbIndex = 3; 


//In Out Sheet 
async function addRowToSheet(date, nim, name, action, time) {
  const correctedAction = actionCheck(action); 
  const doc = new GoogleSpreadsheet('1GTvhgEHVrt_YloDFUd66hDHiuqar0EIWA07_IDMcnBk', jwt);
  await doc.loadInfo(); 
  const sheet = doc.sheetsByIndex[inOutIndex]; 
  await sheet.addRow({ Date: date, NIM: nim, Name: name, Action: correctedAction, Time: time });
}

//Tools Sheet
async function addRowToSheet2(nim, name, tools) {
  const doc = new GoogleSpreadsheet('1GTvhgEHVrt_YloDFUd66hDHiuqar0EIWA07_IDMcnBk', jwt);
  await doc.loadInfo(); 
  const sheet = doc.sheetsByIndex[toolsIndex]; 
  await sheet.addRow({ NIM: nim, Name: name, Tools: tools });
}

// to rename a sheet 
async function renameSheet(new_sheet_name, index){
  const doc = new GoogleSpreadsheet('1GTvhgEHVrt_YloDFUd66hDHiuqar0EIWA07_IDMcnBk', jwt);
  await doc.loadInfo(); 
  const sheet = doc.sheetsByIndex[index]; 
  await sheet.updateProperties({ title: new_sheet_name });
}

// to add a visitor
async function addVisitor(id, name, status) {
  const doc = new GoogleSpreadsheet('1GTvhgEHVrt_YloDFUd66hDHiuqar0EIWA07_IDMcnBk', jwt);
  await doc.loadInfo(); 
  const sheet = doc.sheetsByIndex[visitorsdbIndex]; 
  await sheet.addRow({ ID: id, Name: name, Status: status});
}

// to uniformly input actions
function actionCheck(action){
  let lowerCaseAction = action.toLowerCase();

  if (lowerCaseAction === 'in') lowerCaseAction = 'In';
  else if (lowerCaseAction === 'out') lowerCaseAction = 'Out';
  else throw new Error('Invalid action input. Please input in or out.');

  return lowerCaseAction;
}

export default {
  addRowToSheet,
  addRowToSheet2,
  renameSheet
};


// addRowToSheet('06/09/2023', '777777', 'Chris Martin', 'out', '18:00')
// .then(() => {
//   console.log('Row added successfully');
// })
// .catch((error) => {
//   console.error('Error adding row:', error);
// });

renameSheet("Pull Table", 2); 
renameSheet("Visitors Database", visitorsdbIndex);

// visitorCheck('77777', 'Chris Martin', 'Dosen')
// .then(() => {
//   console.log('Visitor recorded successfully');
// })
// .catch((error) => {
//   console.error('Error adding row:', error);
// });







 //addRowToSheet('22/492140/PA/21072', 'Bagus Alwan', 'Masuk', '15:00')
  //  .then(() => {
  //    console.log('Row added successfully');
  //  })
  //  .catch((error) => {
  //    console.error('Error adding row:', error);
  //  });

  //  addRowToSheet2('22/492140/PA/21072', 'Bagus Alwan', 'Computer besar')
  //  .then(() => {
  //    console.log('Row added successfully');
  //  })
  //  .catch((error) => {
  //    console.error('Error adding row:', error);
  //  });

  // renameSheet('In-Out', 0)
  // .then(() => {
  //   console.log('Renamed successfully');
  // })
  // .catch((error) => {
  //   console.error('Error adding row:', error);
  // }); 
