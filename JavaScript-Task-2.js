/**
    Below is the Solution to the Task given for the Javascript Task two
    Tutor: StartNg
    Student: Asuainok Favour.
    Slack USername: asuainokfavour
    Track: Frontend.
    Submission Date: 8th April 2020

 */

 var data = [
     {principal: 2500, time:1.8},
     {principal: 1000, time:5},
     {principal: 3000, time:1},
     {principal: 2000, time:3}
 ]

 
 function interestCalculator(arrayValue){
     
    arrayValue.forEach(function(item){
        
        if(item.principal >= 2500 && item.time > 1 && item.time < 3){
            item.rate = 3;
        }else if (item.principal >= 2500 && item.time >= 3){
            item.rate = 4
        }else if(item.principal < 2500 || item.time <= 1){
            item.rate = 2
        }else{
            item.rate = 1;
        }

        item.interest = item.principal * item.rate * item.time / 100; //Simple Interest Formular
        var interestData = [item];
        console.log(interestData);
        return interestData;   
     })

   
 }

 interestCalculator(data);

 