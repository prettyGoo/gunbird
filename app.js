var program = require('commander');

program
  .version('0.1.0')
  .usage('[options] <file ...>')
  .option('-s, --sparrow <n>', 'A sparrow velocity', parseFloat)
  .option('-x, --x <n>', 'A range', parseFloat)
  .option('-y, --y <n>', 'A list', parseFloat)
  .option('-b, --bullet <n>', 'A bullet velocity', parseFloat)
  .option('-w, --wind', 'Wind speed', parseFloat)
  .parse(process.argv);

<<<<<<< HEAD
  console.log(program.options)
=======
  function checkArgs() {
    if (!program.sparrow) throw new Error('--sparrow required');
    if (!program.x) throw new Error('--x required');
    if (!program.y) throw new Error('--y required');
    if (!program.bullet) throw new Error('--bullet required');
    if (!program.wind) throw new Error('--wind required');    
  }

  checkArgs();
>>>>>>> 852722a00319d307006adae6a216d0a65b32bb27

 function shot(s_velocity, height, distance, b_velocity, w_velocity) {
  if (distance <= 0) {
    return -1; // Воробей сидит на земле 
         // (по отдыхающим воробьям не стреляем) 
         // или летит под землёй!!!
   }
  
   if (b_velocity <= 0) {
    return -2; // Порох промок!!!
   }
  
   let angle = (Math.asin(-(s_velocity * distance) / (b_velocity * Math.sqrt(Math.pow(height, 2) + Math.pow(distance, 2))))
     + Math.acos(height / Math.sqrt(Math.pow(height, 2) + Math.pow(distance, 2)))) * (360 / (2 * Math.PI));

   if (!isNaN(angle) && angle > 0) {
    return angle;
   }
  
   return 3; // Воробьи летают слишком быстро!!!
 }

 let angle_code = shot(program.sparrow, program.x, program.y, program.bullet, program.wind);

codes = {
  3: 'Killed'
}

 console.log(codes[angle_code]);