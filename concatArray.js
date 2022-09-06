const { template } = require('@babel/core')

function concatArray(array1, array2) {
  if((array1 == null || undefined) &&(array2 == null || undefined) )
  return "undefined";
}
module.exports = concatArray
