// Set the variable onTitle to Zero:
let onTitle = 0;


// Create the first grids:
const grids = [
    "a", "b", "c", "d", "e", "f", "g", 
    "h", "i", "j", "k", "l", "m", "n", 
    "o", "p", "q", "r", "s", "t", "u", 
    "v", "w", "x", "y", "z",

    "aa", "ab", "ac", "ad", "ae", "af", 
    "ag", "ah", "ai", "aj", "ak", "al", 
    "am", "an", "ao", "ap", "aq", "ar", 
    "as", "at", "au", "av", "aw", "ax", 
    "ay", "az",

    "ba", "bb", "bc", "bd", "be", "bf", 
    "bg", "bh", "bi", "bj", "bk", "bl",
    "bm", "bn", "bo", "bp", "bq", "br", 
    "bs", "bt", "bu", "bv", "bw", "bx",
    "by", "bz",

    "ca", "cb", "cc", "cd", "ce", "cf", 
    "cg", "ch", "ci", "cj", "ck", "cl", 
    "cm", "cn", "co", "cp", "cq", "cr", 
    "cs", "ct", "cu", "cv", "cw", "cx", 
    "cy", "cz"
]

// Now create the second grids:
const grids2 = [
    "a", "b", "c", "d", "e", "f", "g", 
    "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", 
    "v", "w", "x", "y", "z",

    "aa", "ab", 
    "ac", "ad", 
    "ae", "af",

    "ag2", "ah2", "ai2", "aj2", "ak2", 
    "al2", "am2", "an2", "ao2", "ap2", 
    "aq2", "ar2", "as2", "at2", "au2", 
    "av2", "aw2", "ax2", "ay2", "az2",

    "ba2", "bb2", "bc2", "bd2", "be2", 
    "bf2", "bg2", "bh2", "bi2", "bj2", 
    "bk2", "bl2", "bm2", "bn2", "bo2", 
    "bp2", "bq2", "br2", "bs2", "bt2", 
    "bu2", "bv2"
]


// Execute this after lighting up all squares:
function ifAnimIsComplete(onTitle) {
    if (onTitle >= 74) {
        $(".title").css("display", "block");
        $(".title").css("opacity", 1);
    }
}

// Execute this before the synchronous process begins:
for (let l = 0; l < grids.length; l++) {
    setTimeout(function() {
        $(`.${grids[l]}`).css("backgroundColor", "rgb(193, 223, 241)");
        $(`.${grids[l]}`).css("box-shadow", "0px 0px 5px rgba(193, 223, 241, 0.8)");
    }, l * 100)
}

// Execute this after the synchronous process begins:
for (let l2 = 0; l2 < grids2.length; l2++) {
    setTimeout(function() {
        $(`.${grids2[l2]}`).css("backgroundColor", "rgb(193, 223, 241)");
        $(`.${grids2[l2]}`).css("box-shadow", "0px 0px 5px rgba(193, 223, 241, 0.8)");
        onTitle++;
        ifAnimIsComplete(onTitle);
    }, l2 * 100)
}
