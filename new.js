

//let date = moment('30/03/2010');Invalid date
//let date = moment('30.02.2022');Invalid date
// let date = moment('20-04-2022')
//let date = moment('25-12-30')
 //let date = moment('20-05-20')
// let date = moment('20-04-2022')

//valid-----
//let date = moment('20-sep-2022');
// let date = moment('2022-sep-20');
// let date = moment('2017-04-21');
// let date = moment('2022/04/22');
 // let date = moment('12-22-2022');

//let date = moment('dec-22-22')
// let date = moment('03-22-20')
// let date = moment('32-sep-12')

 //validity
//false
//let date = moment('20/03/2022') 
//let date = moment('25/12/30') 
//let date = moment('20.03.2022') 

//true
//let date = moment('20/sep/2022') 
//let date = moment('2022.02.03') 
// let date = moment('02/12/30') 
//let date = moment('20/sep/20') 
//let date = moment('2022/02/20') 
//let date = moment('12/22/2022') 
let date = moment('2022.sep.20') 

let isValid = date.isValid();
document.getElementById("isValid").innerHTML = isValid;

//parse date
document.getElementById("parsedDateDisplay").innerHTML = date;

//check if the date is valid
document.getElementById("isValid1").innerHTML = moment('21/03/2011').isValid();







{/* <div id="parsedDateDisplay"></div>
<br>
<div id="isValid"></div>
<br>
<div id="isValid1"></div>
 */}
