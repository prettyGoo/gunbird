var program = require('commander');

program
  .version('1.0.0')
  .usage('[options] <file ...>')
  .option('-h, --height <n>', 'A sparrow and gun height', parseFloat)
  .option('-d, --distance <n>', 'Distance between sparrow and gun', parseFloat)
  .option('-w, --wind <n>', 'The wind velocity', parseFloat)
  .option('-b, --bullet <n>', 'The bullet velocity', parseFloat)
  .parse(process.argv);


function piupiu(height, distance, bulletVelocity, windVelocity) {
  try {
    if (height < 0) {
      return undefined;
    }

    if (distance === 0) {
      return 0
    }

    if (bulletVelocity === 0) {
      return undefined;
    }

    if (windVelocity === 0) {
      let angel = Math.asin(distance * 9.81 / bulletVelocity^2) / 2;
      return angel
    }

    throw 'Somethins went wrong'
  }
  catch (err) {
    console.log(err)
  }
}

const angel = piupiu(program.height, program.distance, program.bullet, program.wind);
console.log(`The angel is ${angel}`)

exports.index =  {
  piupiu: piupiu,
  program: program
}