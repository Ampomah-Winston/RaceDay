let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegTime = '9:30';
let lateRegTime = '11:00';
let isRegisterdEarly =false;
let runnerAge = 18;
(runnerAge > 18 && earlyRegTime) ?
  raceNumber += 1000 : raceNumber;
  
if(runnerAge > 18 && earlyRegTime){
  console.log(`race time ${earlyRegTime}`)
}else if(runnerAge > 18 && lateRegTime){
  console.log(`Late adults run at ${lateRegTime}`)
}else if(runnerAge < 18){
   console.log(`Youth registrants run at 
    ${lateRegTime} (regardless of registration)`)
}else{
  console.log(`see the registration desk`)
}
