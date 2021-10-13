function monkeyCount(n) {
    var myArr = [];
    for (var i = 1; i <= n; i++){
        myArr.push(i);
    }
    return myArr;
  }   


console.log(monkeyCount(10)); // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(monkeyCount(1)); // --> [1];
console.log(monkeyCount(0)); // --> [];