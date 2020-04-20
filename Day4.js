
//DAY 4 Homework

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

const area = function(l1,l2){
    return l1*l2
}
const areaOfRectangle = area(2,5);
console.log("Rectangle area: ", areaOfRectangle);

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
const crazySum = function(x,y){

      if(x===y) {
          console.log((x+y)*3);
      } else {
          console.log(x+y);
      }
}
crazySum(5,5);

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
Returns triple their absolute difference if the specified number is greater than 19.
*/

const crazyDiff = function(x){
    let crazyDiff = 27
    if (crazyDiff>19) {
        console.log("Crazy Difference is: ", (x-19)*3);
    } else {
        console.log("Crazy Difference is: ", x-19);
    }
}
crazyDiff(27);

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

const boundary = function(N){
    let boundary = 54
    if((N>=20 && N<=100) || N === 400){
        console.log("True");
    } else {
        console.log("False");
    }
}
boundary(54);

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

 

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/



/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

const reverseString = function (str) {
    let splitString = str.split(""); 
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}
const striveReversed = reverseString('Strive');
console.log(striveReversed);


/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

const upperFirst = function(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const final = upperFirst("santa claus");
console.log(final);

//split the string (one option);



/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function(str){
    let res = str.slice(1,-1);
    return res
}
const finalCut = cutString("Hello");
console.log(finalCut);

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/




