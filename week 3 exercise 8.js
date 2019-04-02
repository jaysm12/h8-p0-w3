function pasanganTerbesar(num) {
    var arr = (num + '').split('')
    var hasil = ''
    for(var i = 0; i < arr.length - 1; i++){
        var tampung = arr[i] + arr[i + 1]
        for(var j = 0; j < arr.length - 1; j++){
            var pebanding = arr[j] + arr[j + 1]
            if(tampung > pebanding){
                if(tampung > hasil){
                    hasil = tampung
                }
            }
        }
    }

    
    return hasil


}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99