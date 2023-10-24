import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';


const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
];

const jwt = new JWT({
  email: process.env.CLIENT_EMAIL,
  key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC9SGEOqNw2JeOI\nTqQvWdE6VAVpXxYbyXyo3j6b0HuNxtmlUt94bPE+WrUrPd8Iz1binYsQE5dAXhnE\nIgPgGreoItUh2nIE/pdiw8X0yGA3+UdZQgxFW5f344fwuYjGCLSI8DuqZXxRReG4\ni58XTtcvwAMTb8TQRW/ORpzIktSryssGxrfeuAzK7cMIdlqTDGwvUmYDDeykPHLX\nddnd2JDQ2OaRsnk+RnknR7k46HU+Ja3pVzfUG3X262gokb4912HFjEZO5sNxYliM\n+8hQU2zUbxGHkzqT/bYyIOOdUuIF27ccTBfBhLH4Zo2NQ25p/zdh8sAikG09CVDB\nS67W9LmbAgMBAAECggEALBUSPZbICnhSgGlIRZrWZo4w4HR7sqb/OFjiHem1DLTV\n9XHSh7pfiNUZQmPbcLLRGl/0hh7558zClXISkvvF8AuEtaipS057tU3A6ZxNBFwy\n6K/AKdsGDn5YJ5EeMHjQit/gFXQjOs5anl8uAwCijwVZ8gnivVqeilzZoMDJdOSU\nRL2BAn2mDqBniuxZJoVLBncS4//qANXFpjxlw5SpzeuT7/2ePy6j3aJ1ISb2qx3W\nOt/9J+k/+6kU9PjFNwpGgTPKPY9Os6bASh79f7LjuW9ax/L+IRdJQiYAA5MBlGxr\ns5PdTLOu2PXMaypCk4VJIfojJjqHrVOw17eCvcBv2QKBgQDjG0whNEjZK+KGPHPg\nIirg9fs8d99DJ822TTDnGQ+ZLa1gQWGwCz0BK1QBYBX2g1zUQE8LZfSJgdwIW/NI\ngYwNRAjGJ/YzQbpR49yyH/HTLS58v2copGdN0dsAE7F0bDwmpnKiDoChDxaXqWX2\nGEuactCnCRsvDIt0Yp780XII9wKBgQDVXS8dt/4LaapwpvpGdwMp6dqAoC9Q7lbG\n8GFLQt/J0lhLB6W8L+tPjsHOkEd8obfFGhee3w7sglN6Ms1aWVx+/+gt043RkP8x\ns4QHzaa6zqqhcKxhCLS1vZ/4vsyhuNqVvmXup1erDrRSQeF/8AU3rHDcKJNRWJsC\nPEjsoycvfQKBgQC5+gyp1EsjrNBf5PlvPgunFUicB/4I3HuVIjk9xkQDyGgGPwRk\nSY+3eWfdiHXz3TcTiWYxi1hpkrJBFitv4MZzxpb4zpjK+LQ/gz2jkI1TxdgfyA4O\nNjNygru4oGfdUxUfAYc2NnIXcmep4srgcJzY6dT8NHTSXo+Ey44ussWTmQKBgFFi\nV+R4GBj2VyLdLj3Oi5BjOQszDplKMCN18Uap3X64EyGbayZbCOCxzU8jTYFGljhC\neZwJ7UFdfMXxts6to1B2AHPqa//x1MV6efQYB27eAcvOlJH2pidkiy5waNGPFyFj\nHLJpdlEzLKjrpD4OqY7Q4cO4Xmj66TVzFUXd/cZpAoGAcQi8OLWNKNrf98y5pA9e\nBGVlyXeLJ9AKIpzwZDfQPZs17mcH2pj/gniryjiijI6VudCAYDLDj3eblt50gsCO\nDmGvu/j8fdlyvlgGrXtYOWD9oI9roP8b2M0qNQchpstbtVF83Pq13Mtx/eG+YeiL\nzNwZVnMZX9OgKypCpxOBchE=\n-----END PRIVATE KEY-----\n',
  scopes: SCOPES,
});

//Sheet indexes 
const inOutIndex = 0; 
const toolsIndex = 1; 
const visitorsdbIndex = 8; 


//In Out Sheet 
export async function addRowToSheet(date, name, nim, time, action) {
  const correctedAction = actionCheck(action); 
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_LINK, jwt);
  await doc.loadInfo(); 
  const sheet = doc.sheetsByIndex[inOutIndex]; 
  await sheet.addRow({ Date: date, Name: name, NIM: nim,Time: time, Action: correctedAction});
}

//Tools Sheet
export async function addRowToSheet2(date, name, nim, tools) {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_LINK, jwt);
  if(tools == "null"){
    return; 
  }
  await doc.loadInfo(); 
  const sheet = doc.sheetsByIndex[toolsIndex]; 
  await sheet.addRow({ Date:date, Nama: name, NIM: nim, Tools: tools });
}

// to rename a sheet 
export async function renameSheet(new_sheet_name, index){
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_LINK, jwt);
  await doc.loadInfo(); 
  const sheet = doc.sheetsByIndex[index]; 
  await sheet.updateProperties({ title: new_sheet_name });
}

// to add a visitor
export async function visitorCheck(id, name, status) {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_LINK, jwt);
  await doc.loadInfo(); 
  const sheet = doc.sheetsByIndex[visitorsdbIndex]; 

  const idCheck = await findID(sheet, id); 
  if (idCheck) {
    return;
  }

  await sheet.addRow({ ID: id, Name: name, Status: status});
}

async function findID(sheet, id){
  await sheet.loadHeaderRow();
  const rows = await sheet.getRows();

  // console.log(rows[0]['_rawData'][0]);
  // rows[0] = the index of row 
  // ['_rawData'] = objects of the row shown in arrays
  // [0] = value of the array 
  // output
  // _rowNumber: 2,
  // _rawData: [ '22/496698/PA/21355', 'Vian Sebastian', 'Student' ],
  // _deleted: false

  for (let i = 0; i < rows.length; i++) {
    if (rows[i]['_rawData'][0] == id) {
      return true;
    }
  }
  return false;
}


// to uniformly input actions
export function actionCheck(action){
  let lowerCaseAction = action.toLowerCase();

  if (lowerCaseAction === 'in') lowerCaseAction = 'In';
  else if (lowerCaseAction === 'out') lowerCaseAction = 'Out';
  else throw new Error('Invalid action input. Please input in or out.');

  return lowerCaseAction;
}

// visitorCheck('2wfowenfaio', 'arya', 'Student');
addRowToSheet()
addRowToSheet('14/10/2023', 'www', '22/948334/34', "In", '15:00')
