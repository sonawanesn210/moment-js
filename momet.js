const moment = require('moment');

// // Valid Formats
// let date1 = moment('20-Sep-2022', 'DD-MMM-YYYY');
// console.log(date1.format()); // Output: 2022-09-20T00:00:00+00:00

// let date2 = moment('2022-Sep-20', 'YYYY-MMM-DD');
// console.log(date2.format()); // Output: 2022-09-20T00:00:00+00:00

// let date3 = moment('2017-04-21', 'YYYY-MM-DD');
// console.log(date3.format()); // Output: 2017-04-21T00:00:00+00:00

// let date4 = moment('2022/04/22', 'YYYY/MM/DD');
// console.log(date4.format()); // Output: 2022-04-22T00:00:00+00:00

// let date5 = moment('12-22-2022', 'MM-DD-YYYY');
// console.log(date5.format()); // Output: 2022-12-22T00:00:00+00:00

// let date6 = moment('Dec-22-2022', 'MMM-DD-YYYY');
// console.log(date6.format()); // Output: 2022-12-22T00:00:00+00:00

// let date7 = moment('Dec-22-22', 'MMM-DD-YY');
// console.log(date7.format()); // Output: 2022-12-22T00:00:00+00:00

// let date8 = moment('03-22-20', 'MM-DD-YY');
// console.log(date8.format()); // Output: 2020-03-22T00:00:00+00:00

// let date9 = moment('32-Sep-12', 'YY-MMM-DD');
// console.log(date9.format()); // Output: 2012-09-12T00:00:00+00:00

// // Invalid Formats
// let date10 = moment('20-04-2022', 'DD-MM-YYYY');
// console.log(date10.isValid()); // Output: 

// let date11 = moment('25-12-30', 'DD-MM-YY');
// console.log(date11.isValid()); // Output: 

// let date12 = moment('20-05-20', 'YY-MM-DD');
// console.log(date12.isValid()); // Output: 



const formats = [
  // Valid Formats
  'DD-MMM-YYYY', // Example: '20-Sep-2022'
  'YYYY-MMM-DD', // Example: '2022-Sep-20'
  'YYYY-MM-DD',  // Example: '2017-04-21'
  'YYYY/MM/DD',  // Example: '2022/04/22'
  'MM-DD-YYYY',  // Example: '12-22-2022'
  'MMM-DD-YYYY', // Example: 'Dec-22-2022'
  'MMM-DD-YY',   // Example: 'Dec-22-22'
  'MM-DD-YY',    // Example: '03-22-20'
  'YY-MMM-DD',   // Example: '32-Sep-12'

  // Invalid Formats
  'DD-MM-YYYY',  // Example: '20-04-2022'
  'DD-MM-YY',    // Example: '25-12-30'
  'YY-MM-DD',    // Example: '20-05-20'
  'YYYY/MM/DD',  // Example: '20/03/2022'
  'YYYY/MMM/DD', // Example: '20/sep/2022'
  'YY/MM/DD',    // Example: '02/12/30'
  'YY/MM/DD',    // Example: '25/12/30'
  'YYYY/YY/DD',  // Example: '20/sep/20'
  'YYYY/YY/DD',  // Example: '2022/02/20'
  'MM/DD/YYYY',  // Example: '12/22/2022'
  'YYYY.MM.DD',  // Example: '2022.sep.20'
];

formats.forEach(format => {
  const dateString = '20-04-2022';
  const isValid = moment(dateString, format, true).isValid();
  console.log(` Date: ${dateString}, isValid: ${isValid}`);
});




//let date = moment('20/03/2022') 

//let date = moment('20/sep/2022') 

// let date = moment('02/12/30') 

// let date = moment('25/12/30') 

//let date = moment('20/sep/20') 

//let date = moment('2022/02/20') 

//let date = moment('12/22/2022') 

 



//let date = moment('20.03.2022') 

//let date = moment('2022.sep.20') 

//let isValid = date.isValid();