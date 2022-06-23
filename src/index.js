module.exports = function toReadable (number) {
  let arrNumbers = [0,1,2,3,4,5,6,7,8,9];
  let arrNumbersAfterNine = [10,11,12,13,14,15,16,17,18,19];
  let arrNumbersAfterNineteen = [20,30,40,50,60,70,80,90];
  let arrNumbersHundreds = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  let arrName = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let arrNameAfterNine= ['ten', 'eleven', 'twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let arrNameAfterNineteen = ['twenty', 'thirty','forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let arrNameHundreds =['hundred'];
  let array = Array.from(number.toString(), Number)
  //console.log(array.length);
  
  for (let i = 0; i < arrNumbers.length; i++) {
    for (let x = 0; x < arrName.length; x++) {
      if(number == arrNumbers[i]){
        return arrName[i];
      }
    }
  }

  for (let i = 0; i < arrNumbersAfterNine.length; i++) {
    for (let x = 0; x < arrNameAfterNine.length; x++) {
      if(number == arrNumbersAfterNine[i]){
        //console.log(array.toString())
        return arrNameAfterNine[i];
      }
    }
  }

  for (let i = 0; i < arrNumbersAfterNineteen.length; i++) {
    for (let x = 0; x < arrNameAfterNineteen.length; x++) {
      if(number == arrNumbersAfterNineteen[i]){
        //console.log(array[i])
        return arrNameAfterNineteen[i];
      }
    }
  }

  for (let i = 0; i < arrNumbersHundreds.length; i++) {
    for (let x = 0; x < arrNameHundreds.length; x++) {
      if(number == arrNumbersHundreds[i]){
        //console.log(arrNameHundreds[x])
        return arrName[i+1] + " " + arrNameHundreds[x];
      }
    }
  }

  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < arrNameAfterNineteen.length; x++) {
      if(array.length == 2 && number > arrNumbersAfterNineteen[x]){
        return arrNameAfterNineteen[array[0]-2] + " " + arrName[array[1]]
      }
    }
  }

  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < arrNameHundreds.length; x++) {
      if(array.length == 3 && number > arrNumbersHundreds[x]){
        if(array[1]==0 && array[2] != 0){
          return arrName[array[0]] + " " + arrNameHundreds[0] + " " + arrName[array[2]]
        }
        if(array[1]== 1){
          return arrName[array[0]] + " " + arrNameHundreds[0] + " " + arrNameAfterNine[array[2]]
        }
        if(array[1]!=1 && array[2] == 0){
          return arrName[array[0]] + " " + arrNameHundreds[0] + " " + arrNameAfterNineteen[array[1]-2]
        }
        if(array[1]!=1 && array[2] > 0){
          return arrName[array[0]] + " " + arrNameHundreds[0] + " " + arrNameAfterNineteen[array[1]-2] + " " + arrName[array[2]]
        }
      }
    }
  }


}
