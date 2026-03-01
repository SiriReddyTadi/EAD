const reverseString = function(str){
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
};
const countVowels = function(str){
    let count = 0;
    for(let char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'
            || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'
        ){
            count++;
        }
    }
    return count;
};

const longestWord = function(str){
    const words = str.split(" ");
    let longest = "";
    for(let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
};
function processString(){
    const text = document.getElementById("textInput").value;

    if(text.trim() === ""){
        alert("Please enter a sentence");
        return;
    }

    document.getElementById("reverseResult").textContent =
        "Reverse: " + reverseString(text);

    document.getElementById("vowelResult").textContent =
        "Vowel Count: " + countVowels(text);

    document.getElementById("longestResult").textContent =
        "Longest Word: " + longestWord(text);

    document.getElementById("upperResult").textContent =
        "Uppercase: " + text.toUpperCase();
}