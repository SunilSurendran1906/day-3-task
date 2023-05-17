function giveData(){
    const countries=JSON.parse(this.responseText);
countries.forEach(coun => {
    console.log(coun.region)
   
    });
}

let dataCollectin= new XMLHttpRequest();
dataCollectin.addEventListener("load",giveData);
dataCollectin.open("GET","https://restcountries.com/v3.1/all");
dataCollectin.send();
