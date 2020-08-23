function countSheeps(arrayOfSheep) {
  
    for (var i = 0; i < arrayOfSheep.length; i++) {
      var count = 0;
      if (arrayOfSheep[i] === true) {
        count++ 
        console.log(count)
  
      }
    }
      return (count);
    }
//Get the Middle Character
function getMiddle(s){
    if(s.length % 2 === 0){
      return s[(s.length / 2) - 1] + s[s.length / 2];
      } else {
      return s[Math.floor(s.length / 2)];
    }
  }  
  //vowles count

  function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }

  //odd or even

  function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }
  //capitals 

  var capitals = function (word) {
    var caps = [];
    for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
  };