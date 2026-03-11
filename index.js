'use strict', 

//const options = {
   // body: JSON.stringify({name: "jane", grade: 11, district: "seattle HS"}), 
   // headers: {}, 
   // method: "", //type of rest request}
//exmaple of async function for getting data from url/api. Options in this function mean the variable. The URL plus the variable you choose.

//scope of javascript is limited to what is contained inside curly brackets. 
//Scope Demo
//let apple = "fruit". If your information is inside a {}, you will not be able to pull it out into a function. 
//(ternary) dynamic function using isJson: let data = (isJson) ? await res.json() : await res.text();

async function fetchData(URL, options){
    try {
        const res = await fetch(URL, options)
        if (!res.ok){
            throw new Error("Error Message Here")//go to catch block
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

//async function main(){
 