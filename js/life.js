/**
 * Created by Ig on 07/21/2016.
 */

var init = [
    "0101010101010001110001110110101010000000",
    "0101010101010001100001110110101010000000",
    "0101010101010001110001110110101010000000",
    "0101010101010001110001110110101010000000",
    "0101010101010001110001110110101010000000",
    "0101010101010001110001110110101010000000",
    "0101010101010001110001110110101010000000",
    "0101010101010001110001110110101010000000",
    "0101010101010001110001110110101010000000",
    "0101010101010001100001110110101010000000",
    "0101010101010001110001110110101010000000",
    "0101010101010001110001110110101010000000",
    "0101010101010001110001110110101010000000",
    "0101010101010001110001110110101010000000",
    "0101010101010001110001110110101010000000",
    "0101010101010001110001110110101010000000",
    "0101010101010001110001110110101010000000",
    "0101010101010000110001010110101010000000",
    "0101010101010001110001110110101010000001",
    "0101010101010001110001110110101010000000"
    ];
var oneLine = "";
var age = 0;
var oneRezult = "";
var joinLine;
var life = [];
var nextStep = [];
var iMax = 19;
var jMax = 39;
var feature = 0;
var tomorrow = function(y,x){
    var neighbor = 0;
    iReal = (y)? y - 1 : iMax;
    jReal = (x)? x - 1 : jMax;
    neighbor += life[iReal][jReal];
    iReal = (y)? y - 1 : iMax;
    jReal =  x ;
    neighbor += life[iReal][jReal];
    iReal = (y)? y - 1 : iMax;
    jReal = (x == jMax)? 0 : x + 1;
    neighbor += life[iReal][jReal];
    iReal = y;
    jReal = (x)? x - 1 : jMax;
    neighbor += life[iReal][jReal];
    iReal = y;
    jReal = (x == jMax)? 0 : x + 1;
    neighbor += life[iReal][jReal];
    iReal = (y == iMax)? 0 : y + 1;
    jReal = (x)? x - 1 : jMax;
    neighbor += life[iReal][jReal];
    iReal = (y == iMax)? 0 : y + 1;
    jReal = x;
    neighbor += life[iReal][jReal];
    iReal = (y == iMax)? 0 : y + 1;
    jReal = (x == jMax)? 0 : x + 1;
    neighbor += life[iReal][jReal];
    if ((neighbor < 2 ) || (neighbor > 3 )) feature = 0;
    if (neighbor == 3) feature = 1;
    if (neighbor == 2) feature =  life[y][x];
    return feature;
};
for (var i=0; i<20; i++){
    oneLine = init[i];
    life[i] = [];
    nextStep[i] = [];
    for (var j=0; j<40; j++){
        life[i][j] = parseInt(oneLine.charAt(j), 10);
        nextStep[i][j] = parseInt(oneLine.charAt(j), 10);
    }
}

showLife = function(arrRez){
    oneRezult = "";
    var joinLine = "";
    for (var i=0; i<20; i++){
        for (var j=0; j<40; j++){
            //oneRezult += arrRez[i][j].toString();
            oneRezult += (arrRez[i][j])?"*":".";
        }
        joinLine += oneRezult + "<br>";
        oneRezult = "";
    }
    document.getElementById("life").innerHTML = joinLine;
    document.getElementById("age").innerHTML = "Age: " + age;
    age++;
};

showLife(nextStep);

goLife = function(){
    var nextStep = [];
    for (var i=0; i<20; i++){
        nextStep[i] = [];
        for (var j=0; j<40; j++){
            nextStep[i][j] = tomorrow(i,j);
        }
    }
    showLife(nextStep);
    life = nextStep;
};

