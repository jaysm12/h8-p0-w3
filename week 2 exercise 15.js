function groupAnimals(animals) {
    animals.sort()
    var hasil = []
    var index = 0
    hasil.push([animals[0]])

    // console.log(hasil[index][0][0])
    // console.log(animals[0][0])
    // console.log(hasil)
    for(var i = 1; i < animals.length; i++){
        if(hasil[index][0][0] == animals[i][0]){
            hasil[index].push(animals[i])
        } else {
            hasil.push([animals[i]])
            index++
        }
    }

    return hasil
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]