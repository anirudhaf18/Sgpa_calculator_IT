let sum = 0;
let backlog = 0;
var grad101 = [];
var grad102 = [];
var grad103 = [];
var grad104 = [];
var grad105 = [];
var grad106 = [];
var grad107 = [];
var grad108 = [];
var grad109 = [];


function grading1() {

    let val = document.getElementById("DM").value;
    grad101.push(val);
}

function grading2() {

    let grade = document.getElementById("IP").value;
    grad102.push(grade);
}

function grading3() {
    let grade = document.getElementById("SC").value;
    grad103.push(grade);

}

function grading4() {
    let grade = document.getElementById("CC").value;
    grad104.push(grade);
}

function grading5() {
    let grade = document.getElementById("PP").value;
    grad105.push(grade);
}

function grading6() {
    let grade = document.getElementById("L-DM").value;
    grad106.push(grade);
}

function grading7() {
    let grade = document.getElementById("L-IP").value;
    grad107.push(grade);

}

function grading8() {
    let grade = document.getElementById("L-SC").value;
    grad108.push(grade);

}

function grading9() {
    let grade = document.getElementById("L-CC").value;
    grad109.push(grade);

}


function calculate1() {
    
    // **************************************//

    var mark1 = grad101[grad101.length - 1];

    if (mark1 === "A++") {
        sum = sum + 10 * 3;
    }
    else if (mark1 === "A+") {
        sum = sum + 9 * 3;
    }
    else if (mark1 === "A") {
        sum = sum + 8 * 3;
    }
    else if (mark1 === "B+") {
        sum = sum + 7 * 3;
    }
    else if (mark1 === "B") {
        sum = sum + 6 * 3;
    }
    else if (mark1 === "C+") {
        sum = sum + 5 * 3;
    }
    else if (mark1 === "C") {
        sum = sum + 4 * 3;
    }
    else if(mark1 === "D"){
        sum = sum + 0 * 3;
        backlog = backlog + 1;
    }
   

    //************************************ /

    var mark2 = grad102[grad102.length - 1];

    if (mark2 === "A++") {
        sum = sum + 10 * 3;
    }
    else if (mark2 === "A+") {
        sum = sum + 9 * 3;
    }
    else if (mark2 === "A") {
        sum = sum + 8 * 3;
    }
    else if (mark2 === "B+") {
        sum = sum + 7 * 3;
    }
    else if (mark2 === "B") {
        sum = sum + 6 * 3;
    }
    else if (mark2 === "C+") {
        sum = sum + 5 * 3;
    }
    else if (mark2 === "C") {
        sum = sum + 4 * 3;
    }
    else if(mark2 === "D"){
        sum = sum + 0 * 3;
        backlog = backlog + 1;
    }

   
    //*********************************** */

    var mark3 = grad103[grad103.length - 1];

    if (mark3 === "A++") {
        sum = sum + 10 * 4;
    }
    else if (mark3 === "A+") {
        sum = sum + 9 * 4;
    }
    else if (mark3 === "A") {
        sum = sum + 8 * 4;
    }
    else if (mark3 === "B+") {
        sum = sum + 7 * 4;
    }
    else if (mark3 === "B") {
        sum = sum + 6 * 4;
    }
    else if (mark3 === "C+") {
        sum = sum + 5 * 4;
    }
    else if (mark3 === "C") {
        sum = sum + 4 * 4;
    }
    else if(mark3 === "D"){
        sum = sum + 0 * 4;
        backlog = backlog + 1;
    }

    
    // ************************************/

    var mark4 = grad104[grad104.length - 1];

    if (mark4 === "A++") {
        sum = sum + 10 * 3;
    }
    else if (mark4 === "A+") {
        sum = sum + 9 * 3;
    }
    else if (mark4 === "A") {
        sum = sum + 8 * 3;
    }
    else if (mark4 === "B+") {
        sum = sum + 7 * 3;
    }
    else if (mark4 === "B") {
        sum = sum + 6 * 3;
    }
    else if (mark4 === "C+") {
        sum = sum + 5 * 3;
    }
    else if (mark4 === "C") {
        sum = sum + 4 * 3;
    }
    else if(mark4 === "D"){
        sum = sum + 0 * 3;
        backlog = backlog + 1;
    }

    // ************************************/

    var mark5 = grad105[grad105.length - 1]

    if (mark5 === "A++") {
        sum = sum + 10 * 2;
    }
    else if (mark5 === "A+") {
        sum = sum + 9 * 2;
    }
    else if (mark5 === "A") {
        sum = sum + 8 * 2;
    }
    else if (mark5 === "B+") {
        sum = sum + 7 * 2;
    }
    else if (mark5 === "B") {
        sum = sum + 6 * 2;
    }
    else if (mark5 === "C+") {
        sum = sum + 5 * 2;
    }
    else if (mark5 === "C") {
        sum = sum + 4 * 2;
    }
    else if(mark5 === "D"){
        sum = sum + 0 * 2;
        backlog = backlog + 1;
    }

    // ***********************************/

    var mark6 = grad106[grad106.length - 1]

    if (mark6 === "A++") {
        sum = sum + 10 * 1;
    }
    else if (mark6 === "A+") {
        sum = sum + 9 * 1;
    }
    else if (mark6 === "A") {
        sum = sum + 8 * 1;
    }
    else if (mark6 === "B+") {
        sum = sum + 7 * 1;
    }
    else if (mark6 === "B") {
        sum = sum + 6 * 1;
    }
    else if (mark6 === "C+") {
        sum = sum + 5 * 1;
    }
    else if (mark6 === "C") {
        sum = sum + 4 * 1;
    }
    else if(mark6 === "D"){
        sum = sum + 0 * 1;
        backlog = backlog + 1;
    }


    // ***********************************/

    var mark7 = grad107[grad107.length - 1];

    if (mark7 === "A++") {
        sum = sum + 10 * 1;
    }
    else if (mark7 === "A+") {
        sum = sum + 9 * 1;
    }
    else if (mark7 === "A") {
        sum = sum + 8 * 1;
    }
    else if (mark7 === "B+") {
        sum = sum + 7 * 1;
    }
    else if (mark7 === "B") {
        sum = sum + 6 * 1;
    }
    else if (mark7 === "C+") {
        sum = sum + 5 * 1;
    }
    else if (mark7 === "C") {
        sum = sum + 4 * 1;
    }
    else if(mark7 === "D"){
        sum = sum + 0 * 1;
        backlog = backlog + 1;
    }

    
    // ****************************************/

    var mark8 = grad108[grad108.length - 1];

    if (mark8 === "A++") {
        sum = sum + 10 * 1;
    }
    else if (mark8 === "A+") {
        sum = sum + 9 * 1;
    }
    else if (mark8 === "A") {
        sum = sum + 8 * 1;
    }
    else if (mark8 === "B+") {
        sum = sum + 7 * 1;
    }
    else if (mark8 === "B") {
        sum = sum + 6 * 1;
    }
    else if (mark8 === "C+") {
        sum = sum + 5 * 1;
    }
    else if (mark8 === "C") {
        sum = sum + 4 * 1;
    }
    else if(mark8 === "D"){
        sum = sum + 0 * 1;
        backlog = backlog + 1;
    }

    // **************************************/

    var mark9 = grad109[grad109.length - 1];

    if (mark9 === "A++") {
        sum = sum + 10 * 1;
    }
    else if (mark9 === "A+") {
        sum = sum + 9 * 1;
    }
    else if (mark9 === "A") {
        sum = sum + 8 * 1;
    }
    else if (mark9 === "B+") {
        sum = sum + 7 * 1;
    }
    else if (mark9 === "B") {
        sum = sum + 6 * 1;
    }
    else if (mark9 === "C+") {
        sum = sum + 5 * 1;
    }
    else if (mark9 === "C") {
        sum = sum + 4 * 1;
    }
    else if(mark9 === "D"){
        sum = sum + 0 * 1;
        backlog = backlog + 1;
    }

    
    // ************************************/

    let sgpa = document.getElementById("demo1");
    sgpa.innerText = "Your sgpa:- " + (sum / 19).toFixed(2) + "  Back:- " + backlog;

    sum = 0;
    backlog = 0;
    event.preventDefault();
};


