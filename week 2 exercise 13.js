  function targetTerdekat(arr) {
  var tampung = []

  for(var i = 0; i < arr.length; i++){
    var count = 0
    if(arr[i] == 'o'){
        for(var j = i; j < arr.length; j++){
          count = count + 1
          if(arr[j] == 'x'){
            tampung.push(count - 1)
            }
          }
        } 
    if(arr[i] == 'x'){
        for(var j = i; j < arr.length; j++ ){
          count = count + 1
          if(arr[j] == 'o'){
            tampung.push(count - 1)
          }
        }
      }
  }

if(tampung.length == 0){
  tampung.push(0)
}
tampung.sort()

// console.log(tampung)

 return tampung[0]
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2