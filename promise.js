const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosiPenonton) => {
  
  let result = 0;
  const penontonTheaterIXX = await promiseTheaterIXX(emosiPenonton);
  const penontonTheaterVGC = await promiseTheaterVGC(emosiPenonton);

  for(const emosi of penontonTheaterIXX){
    if(emosiPenonton === emosi.hasil){
      result++;
    }
  }

  for(const emosi of penontonTheaterVGC){
    if(emosiPenonton === emosi.hasil ){
      result++;
    }
  }

  return result;
};


module.exports = {
  promiseOutput,
};
