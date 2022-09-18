const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  await new Promise((emosi) => setTimeout(emosi, 200));
  const penontonTheaterIXX = await promiseTheaterIXX(emosi);
  const penontonTheaterVGC = await promiseTheaterVGC(emosi);

return new Promise((resolve, reject) => {
  if(resolve) {
    let result = 0;
  for(const emosiPenonton of penontonTheaterIXX){
    if(emosi === emosiPenonton.hasil){
      result++;
    }
  }

  for(const emosiPenonton of penontonTheaterVGC){
    if(emosi === emosiPenonton.hasil){
      result++
    }
  }
    return resolve(result);
  } else {
    reject("data tidak ditemukan");
  }
  
  
  
}) 

}


module.exports = {
  promiseOutput,
};
