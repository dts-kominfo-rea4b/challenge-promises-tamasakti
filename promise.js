const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosiPenonton) => {
  await new Promise((emosiPenonton) => setTimeout(emosiPenonton, 200));
  const penontonTheaterIXX = await promiseTheaterIXX(emosiPenonton);
  const penontonTheaterVGC = await promiseTheaterVGC(emosiPenonton);

return new Promise((resolve) => {
  let result = 0;
  for(const emosi of penontonTheaterIXX){
    if(emosiPenonton === emosi.hasil){
      result++;
    }
  }

  for(const emosi of penontonTheaterVGC){
    if(emosiPenonton === emosi.hasil){
      result++
    }
  }
  return resolve(result);
}) 

}


module.exports = {
  promiseOutput,
};
