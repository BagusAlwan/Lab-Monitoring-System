import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library'
import { readFileSync } from 'fs';
 
const data = readFileSync('secret.json', 'utf8');
const creds = JSON.parse(data);

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
];

const serviceAccountAuth = new JWT({
  email: creds.client_email, // "lab-332@testing-396909.iam.gserviceaccount.com",
  key: creds.private_key, //"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDqLFaRw5skSxuh\nncgli4Xt5Of5COWlNizjzk8YkHHYNi8sRRW+0xw8rZBOBZoftJsogbfCYFllP5Z4\nFvD750wyFcGYqTQAcM/6wGa9xMltBhzsk2ZQJ/72Z3B8DzULr7xgoavNc8NI2dOc\nYbBvboqnjUSgWvu4QlRveu3rn7jhAHIUMVmv9t+EnpjyFatQ28PPlPMPVlqkCwWv\ntGSlnOG+hfn/S+eu8Ovs2DttdVXEDPGigf6hch1Ep6AJ6Kr2e2XfHgjAOEU+/1pA\nVqIQ0zZsT9QdHk1GbBAcwp7LMhSwfD5Z+C5XKH8OtD/dukDmK7Me35eif8nyptx1\nVHb9yHHVAgMBAAECggEAB/8nnaauX5jpAqXetdmD41HT0h9JqFCnS8g5zz7vhFCl\nX7+kNHYFGtVafi+WycpjGgkD+3FK3DhFrSgrZo7JfVRc3he5HOK9V3TGjWhw8HYq\n+rE15zrWbBewMaxbRWDk7+/VbBit7Ijzvv1fBw8hUQNz+n3g5rPtKjlqcodrytMm\nVRI2pbsdqIguk4Pa78FH+U3QspmW/8nMd8vuTMm8jf7XKQEPAoSr80cRrQTHuUPu\n5zlGUhv2ZRl3JGud/gH9x4pn3m/hTx3qxqLK4C5YSe1gg7aZYcZPA3SPe6xvOFCn\nMNHSwWBfz01pEMTAUVBaTVIJkXYCR62vsSx0SwQCgQKBgQD/2rRDcj7okcR7eHos\nS4mhFVqJNw38wNurOmF/8TZu/ApWQkWp2fKN12lc/tdSkoeH5cIsyrv8icWQFV7k\n2hdJ6SONXXCp7OzH+lmnthwyra+1H17+CpqEvwuK27mY5Uk4Ej6uMs7H+EkIkMth\n+123EQmsIGoxuhEstFes1MrbMQKBgQDqTnk62f/evRuloZgDTDdmYM0O+TGI9+mM\nJh8t1KdEWVC58ohpziqyR2sZcjm5Sy7qomt0HHSj7QA7qhll1thaAznrnkpERZQS\nGILeGoShVwc/lNc0pyZUfKYKh2Ma75bTx/Oof4CzPEGJaRftGAaJPvvLiXQbzYWD\n9ZbRFYKP5QKBgQDKD8F52spQBn80PAvQ279QFnswDujfCrjx2+OQlcG1mRvYz/IQ\nmG31E4DEzwbi0ZJ0A0J8+YfJhE0g45/UAWGPH67SQE9wBAtkTBVuXGacp4sy8hml\nbF5oJDFLcwh69eoDfHVAQiQIzc9wElptgYWbxLrs05TKvPY/ZhYwCsZCoQKBgAb9\nTkp+JE7dr0xylJlMlb59FsDimCKw2ouuu3FfjZnRXEIfxQf6+XUWAlDhAm3Pm1eu\nfqwZCTW2pTIicd2C2jNdM0YfE7ITrUYY6xZ7DgfOE85Gv2C3t8H/ceiQf1lXWlV4\n+oDFRO6T1pSlyOvusos3kMVSlV8a82erVNNp49otAoGBAO7v135AA2OmiPBnUpI8\npmaiW5Ajgdxb3DfdiuGZ/TpShMiPQeuH08pYYwSf0iLCcFRGIoUK+labxh123Ud2\nY1LPONHn4NPzoOe18IOeRG9qlbqTYGU7TjyWFTAOc6PzzgCGmiIxo9VphvGNwe6C\nQhgZouiMGpjV7gauFR0150X+\n-----END PRIVATE KEY-----\n",
  scopes: SCOPES
});

const doc = new GoogleSpreadsheet("1IQDQ3dp9AZSosDLxSOCN7PWv76o4wdImE3Lo9TgzmG8", serviceAccountAuth);


async function sheetInfo(){

  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);
  await doc.updateProperties({ title: 'blabla' });
  
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  console.log(sheet.title);
  console.log(sheet.rowCount);
  
}

sheetInfo();