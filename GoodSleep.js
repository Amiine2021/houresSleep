function getSleepHours(day){
    if(day === "Monday"){
      return 9;
    }   if(day === "Tuesday"){
      return 9;
    }  if(day === "Wednesday"){
      return 9;
    }  if(day === "Thursday"){
      return 9;
    }  if(day === "Friday"){
      return 9;
    }  if(day === "Saturday"){
      return 9;
    }  if(day === "Sunday"){
      return 9;
    } 
  }
  const  getActualSleepHours = () => 
    getSleepHours("Monday")+
     getSleepHours("Tuesday")+
      getSleepHours("Wednesday")+
       getSleepHours("Thursday")+
        getSleepHours("Friday")+
         getSleepHours("Saturday")+
          getSleepHours("Sunday");
        
   console.log(getActualSleepHours()); 
  
  
  const getIdealSleepHours = () => {
    const idealHours  = 8
    return idealHours* 7
  
  }
  // console.log(getIdealSleepHours());
  const calculateSleepDebt =  () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours =  getIdealSleepHours();
    if (actualSleepHours === idealSleepHours ){
      console.log( 'You get a perfect amount of sleep 🎃')
    } else if (actualSleepHours > idealSleepHours ){
      console.log( 'You get ' + (   actualSleepHours -  idealSleepHours)  + ' more sleep that you need 🤓' )
    }else if (actualSleepHours < idealSleepHours ){
      console.log( 'You should get ' + (idealSleepHours - actualSleepHours) + ' hours more  to  rest 😕')
    } else {
      console.log('Error, Please try something else')
    }
  }
  calculateSleepDebt();
  
  
  
  
  
  
  
  