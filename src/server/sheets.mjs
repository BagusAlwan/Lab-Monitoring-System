import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';


const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
];

const jwt = new JWT({
  email: "lab-monitoring@labmonitoring-396615.iam.gserviceaccount.com",
  key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCPOzCBd5ZYoT0G\n9GapZ+xFyDrk+GmGupSXOqGbvV4j1v/fn5TCcVH8N7CZCXhTIzEBlTlVEiUqGcQj\nt6dzQzM3Luapz6Y0WuT47FQNsNI+V2wBtKolYclWk2Xp2dP57iF4qhsHvTqGl1bQ\nnrTWjSQAuN479MrmIvG9/YRllN/66a0CIuZkx63kdeeJb2LM+68VKQ0++5n7kOOJ\nQ6ZPxR7vnzEBRfwk5K9ion4jLyuEJ1MtG1L1tuIqG6QIXwYHqdBPSZP5hebVMPLO\ni1EmfW9wjRhwRJro12/fhnRDKPEvG4+QeaVe4wiILaWZsqoLXh3rnyhdLJs4Gugu\nZ7m11ybLAgMBAAECggEAAcLC2Y9EduR3NphXPBU9+gGjJQt0vfuZ4LNk0eBQbEpe\nrOYY/bxHkL0yhj8ajpMWgs7N0fY+JLgFCZdeufOv3n7MxnZPXxdloeBt4W6KDHV7\nVhiy0Bt/+SN+E5OM9Tvwh2Y38i6+WHHl1vy3JmgScuZ9kj5z0W5z4Fe3LUnY6GG6\n/HdbdoDaaqUwRxkGCtdRik0x57DOPgzO/Rg4CWnEyG3+2J3kzt9XSe0Xi96LK3vF\nZG4hdvUMKheF08/+zLyP8arbQWtE1Rt4jxodQa9uDUv+++/7kvpSP/6Ys9X/FBS/\nFrVb+EdU6l/111og3KBDp2TZO1uEpSHUcXf8O/kloQKBgQDAbFJ8dEVlzow7b03q\nfAHOzvoqOo+f+8roW7H3BrpJrTROiEyP/o3nV/z7MEg1r9lZGiQtr/2Z0HY/ewn6\nq9cZ3oRrIBelP8llP7eft0esCS34OjI2xTIbjt8YQ5gl8YbRx7WC4j5gS/WwsmYl\n7Fwp6vvXv14ktpRh5HY29Ux2MQKBgQC+jhQ5DOZl5sys9t7o8s7AudJ2Rwd7r8pP\nuubMvbfWksXHeyzeZuaQj/rxHT17RoBTnYy7pU84vHWmbnYAbba/DXvjz2nwiz78\nsavcSdCyVQhlm4zhPTR0uyYGmSJZrGzc4pLGIwxJo6HpDCrfZKkbMbq8RJkvpy/O\n2kb5SSihuwKBgQCiHSDJdXPaN8/xau6r9NnZEIu29Ct4z7u9UzN2ORbNZ70/xJks\nX3vSQlECl0Te5k4pQVrlmvX/lp9pEBHyPMA2LUBGuHzzXfAg+zOKvfEGQZ2XGgCg\nIDb8/Lt8R8ZxgTDioGyN3mpK2vQdb8+bd6yWLEENHU8Fg0UzzDTETJmkoQKBgCNq\n2v1jlWs5Q6+eTv4zKxSNNT4Ao7ZsjQjWr1E8re+25gXWshdAPvh9mmG4UpYYG3/v\nF5pE9n2QIbnmbA5WVhIamn1ULtejufhTuaK/IYgT3/SqvbubmaVcp4uwaL8MGkvP\n3QHwv7bsMArV1R4iYoAIdTHK+kHuLCehUHHDFEdDAoGAKAOA6qUBws2OEAoLdxGM\n2oGSgkI7Ex+94P3iMYhWNrY1uadsgHifGGMl7BZ92mhuz9yalc3XIb0LDm3HuArd\nrGQpADAKPxm81eZx8tTWAb7+er5b2sp7q3HLj5b4PGXXh32ZUGu571TMOjb25f9i\nMqPqoQ4wYInmYFaS4R8Lt+E=\n-----END PRIVATE KEY-----\n",
  scopes: SCOPES,
});

//Sheet indexes 
const inOutIndex = 0; 
const toolsIndex = 1; 
const visitorsdbIndex = 8; 


//In Out Sheet 
export async function addRowToSheet(date, name, nim, action, time) {
  const correctedAction = actionCheck(action); 
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_LINK, jwt);
  await doc.loadInfo(); 
  const sheet = doc.sheetsByIndex[inOutIndex]; 
  await sheet.addRow({ Date: date, Name: name, NIM: nim, Action: correctedAction, Time: time });
}

//Tools Sheet
export async function addRowToSheet2(nim, name, tools) {
  const doc = new GoogleSpreadsheet('1GTvhgEHVrt_YloDFUd66hDHiuqar0EIWA07_IDMcnBk', jwt);
  await doc.loadInfo(); 
  const sheet = doc.sheetsByIndex[toolsIndex]; 
  await sheet.addRow({ NIM: nim, Name: name, Tools: tools });
}

// to rename a sheet 
export async function renameSheet(new_sheet_name, index){
  const doc = new GoogleSpreadsheet('1GTvhgEHVrt_YloDFUd66hDHiuqar0EIWA07_IDMcnBk', jwt);
  await doc.loadInfo(); 
  const sheet = doc.sheetsByIndex[index]; 
  await sheet.updateProperties({ title: new_sheet_name });
}

// to add a visitor
export async function visitorCheck(id, name, status) {
  const doc = new GoogleSpreadsheet('1GTvhgEHVrt_YloDFUd66hDHiuqar0EIWA07_IDMcnBk', jwt);
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

visitorCheck('2wfowenfaio', 'arya', 'Student');

