import CounterTypes from './Model.js'

function hFor09(number) {
  switch(number) {
    case 0:
        return ""
    case 1:
        return "いち"
    case 2:
        return "に"
    case 3:
        return "さん"
    case 4:
        return "よん"
    case 5:
        return "ご"
    case 6:
        return "ろく"
    case 7:
        return "なな"
    case 8:
        return "はち"
    case 9:
        return "きゅう"
    default:
        return "DEFAUltCSAWTE"
  }
}

function hFor10() {
  return "じゅう"
}

function hiraganaForInt(number) {
  var i = parseInt(number);
  var tens = Math.floor(i / 10);
  var ones = i % 10;
  return (tens > 0 ? (tens > 1 ? hFor09(tens) : "") + hFor10() : "") + hFor09(ones)
}

function getAnswer(number, counterType) {
  return hiraganaForInt(number) + " " + CounterTypes[counterType].hiragana;
}

export default getAnswer;