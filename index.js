const mns = new require("./mynsys_EN.js")().ord;

function _AddBasic(o,t) {
  //0-9
  return mns[mns.indexOf(o) + mns.indexOf(t)]
}

function DigitBase10(n) {
  return mns[1] + mns[n - 9]
}
