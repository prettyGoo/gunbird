var program = require('commander');

// program
//   .version('1.0.0')
//   .usage('[options] <file ...>')
//   .option('-s, --sparrow <n>', 'A sparrow velocity', parseFloat)
//   .option('-x, --x <n>', 'A range', parseFloat)
//   .option('-y, --y <n>', 'A list', parseFloat)
//   .option('-b, --bullet <n>', 'A bullet velocity', parseFloat)
//   .option('-w, --wind', 'Wind speed', parseFloat)
//   .parse(process.argv);


function piupiu(height, distance, windVelocity) {

  try {
    if  (windVelocity === 0) {
      return 'killed'
    }

    throw 'Somethins went wrong'
  }
  catch (err) {
    return err
  }
}

exports.index =  {
  piupiu: piupiu,
  program: program
}