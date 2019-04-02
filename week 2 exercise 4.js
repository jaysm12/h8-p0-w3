var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];


function dataHandling2(input){
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    input.splice(4, 1, "pria", "SMA Internasional Metro")
    console.log(input)

    var tanggal = input[3].split('/')
    var arrTanggal = []

    for(var i = 0; i < tanggal.length; i++){
        arrTanggal.push(Number(tanggal[i]))
    }

    switch(arrTanggal[1]){
        case 1: {console.log('Januari'); break;};
        case 2: {console.log('Februari'); break;};
        case 3: {console.log('Maret'); break;};
        case 4: {console.log('April'); break;};
        case 5: {console.log('Mei'); break;};
        case 6: {console.log('Juni'); break;};
        case 7: {console.log('Juli'); break;};
        case 8: {console.log('Agustus'); break;};
        case 9: {console.log('September'); break;};
        case 10: {console.log('Oktober'); break;};
        case 11: {console.log('November'); break;};
        case 12: {console.log('Desember'); break;};
      }
    

    var joinTanggal = tanggal.join('-')
    var sortTanggal = arrTanggal.sort(function(value1, value2) { return value1 < value2 })
    
    for(var i = 0; i < sortTanggal.length; i++){
        sortTanggal[i] = sortTanggal[i] + ''
        if(sortTanggal[i].length == 1){
            sortTanggal[i] = '0' + sortTanggal[i]
        }
    }
    
    console.log(sortTanggal)
    console.log(joinTanggal)

    if(input[1].length >= 15){
        console.log(input[1].slice(0,15))
    } else {
        console.log(input[1])
    }
}


dataHandling2(input)

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */