let URL;
let year = '2021';
let mounth = '02';
let days = 28;
let rates = Array();
// for (let i = 0; i < 28; i++) {
//     rates[i] = new Array();
// }
for (let i = 0; i < days; i++) {
    
    if (i < 9) {
        URL = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&date=${year}${mounth}0${i + 1}&json`;
    }else{
        URL = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&date=${year}${mounth}${i + 1}&json`;
    }

    let xhr = new XMLHttpRequest();

    xhr.open('GET', URL);

    xhr.onload = function () {
        //console.log(this);

        let day = JSON.parse(this.responseText);

        //console.log(day[0].exchangedate);
        rates = day[0].exchangedate + ' - ' + day[0].rate; 
        console.log(rates);       
    }

    xhr.send();
}


