const input = process.argv.slice(2);

function timer(input) {
  if (input <= 0) {
    return console.log("error")
   
  }
  if (input != Number){
    return console.log("error")
  }
  for (let i = 0; i < input.length; i++) {
    setTimeout(function(){
      process.stdout.write('\x07')
    },input[i] * 1000) 
    
  }
  console.log(`Alarm will beep in ${input} second(s)`)
}
  

timer(input)
//a function to take indvidual num 
// add a timeout function 
// multiply number by 1000
// returns the sound after the time put in by user 

