var input = "hello world!"



function balikString(str){
    var hasil = []
    for(var i = str.length - 1; i >= 0; i--){
        hasil.push(str[i])
    }

    return hasil.join('')
}

console.log(balikString(input))
//output
// "!dlrow olleh"