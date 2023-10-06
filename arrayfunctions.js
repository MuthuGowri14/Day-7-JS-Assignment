//1.Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).


let xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v2/all?user=1',true)
xhr.onload=function(){
    if(xhr.status=== 200){
        let result=JSON.parse(xhr.response);
        console.log(result);
    //a)Get all the countries from Asia continent /region using Filter function
        const output=result.filter((x)=>{
           return x.region===('Asia')  
        })
        console.log("countries belongs to asia: ",output)
    //b)Get all the countries with a population of less than 2 lakhs using Filter function
        const output1=result.filter((y)=>{
                        return y.population<200000
                    })
                    console.log("Population less than 2 lakhs: ",output1)
    //c)Print the following details name, capital, flag using forEach function
         result.forEach(data => {
                    
            console.log(data.name);
            console.log(data.capital);
            console.log(data.flag); 
                                
         });

    //d)Print the total population of countries using reduce function
         const userdata=result.reduce(function(acc,curr){
          return  acc+curr.population;
         },0)
        console.log("Total population of countries: ",userdata);
    
    //e) Print the country which uses US Dollars as currency.
        let output2=result.filter ((item)=> {
           for (let data in item.currencies) 
              return item.currencies[data].code === "USD"                    
           })
         console.log(output2);
    }
    else{
        console.log("Error");
    }
}
xhr.send();




 
