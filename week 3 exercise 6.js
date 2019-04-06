function angkaPalindrome(num) {
    if(num < 10){
        return num + 1
    }
    for(var i = num; i < 100000000000; i++){
        num++
        var tampung = num.toString()
        var reverse = ''
        for(var j = tampung.length - 1; j >= 0; j--){
            reverse = reverse + tampung[j]
        }
        if(reverse == tampung){
            return num
        }
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001