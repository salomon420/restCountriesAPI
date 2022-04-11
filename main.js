const countriesList = document.getElementById("countries");
let countries;


countriesList.addEventListener("change", newCountrySelection)


function newCountrySelection (event) {
    displayCountryInfo(event.target.value)  
}
// fetch("https://restcountries.com/v3.1/all")
// .then(function(res) {
//     //console.log(res.json());
//     return res.json();
// })
// .then(function(data) {
//     //console.log(data);
//     initialize(data);
// })
// .catch(function(err){
//     console.log('Error:',err);
// })
fetch("https://restcountries.com/v3.1/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log('Error:',err));
function initialize(countriesData) {    
    countries = countriesData;
    let options = '';
    // for (let i=0; i<countries.length;i++) {
    //     options += `<option value = "${countries[i].alpha2codes}"> ${countries[i].name}</option>`;
    // } 
    countries.forEach(country => options += `<option value = "${country.cca3}"> ${country.name.common}</option>`)

   countriesList.innerHTML = options; 
//    console.log(countriesList);
//    console.log(countriesList.value);
//    console.log(countriesList.length);
//    console.log(countriesList.selectedIndex);
//    console.log(countriesList[10]);
//    console.log(countriesList[10].value);
//    console.log(countriesList[10].text);
countriesList.selectedIndex = Math.floor(Math.random()*countriesList.length);
   displayCountryInfo(countriesList[countriesList.selectedIndex].value);
//document.querySelector("#countries").innerHTML = options;
}

function displayCountryInfo(countryByCca3) {
    const countryData = countries.find(country => country.cca3 === countryByCca3)
    //console.log(countryData);
    //console.log(Object.keys(countryData.currencies));
    document.querySelector("#flag-container img").src = countryData.flags.svg;
    document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;
    document.getElementById('capital').innerHTML = countryData.capital;
    document.getElementById('dialing-code').innerHTML = `+${countryData.ccn3}`;
    document.getElementById('population').innerHTML = countryData.population.toLocaleString("en-Us");
    document.getElementById('currencies').innerHTML = countryData.currencies[Object.keys(countryData.currencies)[0]].name;
    document.getElementById('region').innerHTML = countryData.region;
    document.getElementById('sub-region').innerHTML = countryData.subregion;
   
}


