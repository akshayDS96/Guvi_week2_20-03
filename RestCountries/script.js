// Task1: 1. Load the rest countries' data using your HTML and script.js file and run a for 
// loop on the data and print all the country names in the console. 

var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function() {
    var data = JSON.parse(this.response)
    console.log(data)
    data.forEach(element => {
        console.log(element.name)
    });
}