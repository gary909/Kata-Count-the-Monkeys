function monkeyCount(n) {
    // your code here
    var sum = [];
    for (var i = 0; i < n.length; i++){
        sum = sum.push(n[i]);
    }
    return sum;
}

console.log(monkeyCount(10)); // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(monkeyCount(1)); // --> [1];