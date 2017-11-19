var program = require('commander');

program
  .version('1.0.0')
  .usage('[options] <file ...>')
  .option('-h, --height <n>', 'A sparrow and gun height', parseFloat)
  .option('-d, --distance <n>', 'Distance between sparrow and gun', parseFloat)
  .option('-w, --wind <n>', 'The wind velocity', parseFloat)
  .parse(process.argv);


function piupiu(height, distance, windVelocity) {
  console.log(height, distance, windVelocity)
  try {
    if  (distance === 0 || windVelocity === 0) {
      return 'killed'
    }

    throw 'Somethins went wrong'
  }
  catch (err) {
    return err
  }
}

const result = piupiu(program.height, program.distance, program.wind);
console.log(`${result}`)

exports.index =  {
  piupiu: piupiu,
  program: program
}