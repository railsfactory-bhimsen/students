const data = require('./data/data')
const main = () => {
  data.map(element => {
    console.log(`id: ${element.id}, name: ${element.name}, scores: ${JSON.stringify(element.marks)}`);
  })
}
main();
