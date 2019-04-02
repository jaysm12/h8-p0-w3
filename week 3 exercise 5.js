function palindrome(kata) {
    var arr = kata.split('')
    var reverse = []
    for(var i = arr.length - 1; i >= 0; i--){
        reverse.push(arr[i])
    }

    
    var palindrome = reverse.join('')
    return palindrome == kata
}
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false