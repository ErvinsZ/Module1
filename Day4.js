
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
const finalDiff = crazyDiff(27);
    