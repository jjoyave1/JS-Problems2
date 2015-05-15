// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x, y){
    var n1 = x; var n2 = y;
    var answer = undefined;
    if (n1 > n2 || n1 == n2){
        answer = n1;
    }
    if (n1 < n2){
        answer = n2;
    }
    return answer;
}
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z){
    var numbers = [x, y, z];
    var store = []
    var orderedNumbers = numbers.sort(function(a, b){
        return a - b;
    });
    return orderedNumbers[2]
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    var letter = char;
    var verdict = false;
    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
        verdict = true;
    }
    return verdict;
}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    var arr = phrase.split("");
    var rovArray = [];
    arr.forEach(function(x){
        if (x !== 'a' && x !== 'e' && x !== 'i' && x !== 'o' && x !== 'u'){
            rovArray.push(x + 'o' + x);
        }
        else{
            rovArray.push(x);
        }
    })
    return rovArray.join("");
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(arr){
    var total = arr.reduce(function (a,b){
        return a + b;
    });
    return total;
}

function multiply(arr){
    var total = arr.reduce(function (a,b){
        return a * b;
    });
    return total;
    // var str = arr.join("*");
    // return eval(str);
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(x){
  return x.split('').reverse().join('');
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    var longest = words.sort(function (a, b) {
        return b.length - a.length})[0];
    return longest;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    var newArr = [];
    words.forEach(function(word) {
        if (word.length > i){
        newArr.push(word);}
    });
    return newArr;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string) {
    var freq = new Object();
    for (var i = 0; i < string.length; i++) {
        var character = string.charAt(i);
        if ( freq[character] ) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
}
