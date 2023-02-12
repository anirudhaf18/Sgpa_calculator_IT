let sum = 0;
let backlog = 0;
var grad1 = [];
var grad2 = [];
var grad3 = [];
var grad4 = [];
var grad5 = [];
var grad6 = [];
var grad7 = [];
var grad8 = [];
var grad9 = [];
var grad10 = [];
var grad11 = [];


function grading100() {

    let val = document.getElementById("ADBMS").value;
    grad1.push(val);
}

function grading200() {

    let grade = document.getElementById("MC").value;
    grad2.push(grade);
}

function grading300() {
    let grade = document.getElementById("LOS").value;
    grad3.push(grade);

}

function grading400() {
    let grade = document.getElementById("TOC").value;
    grad4.push(grade);
}

function grading500() {
    let grade = document.getElementById("GIS").value;
    grad5.push(grade);
}

function grading600() {
    let grade = document.getElementById("L-ADBMS").value;
    grad6.push(grade);
}

function grading700() {
    let grade = document.getElementById("L-MC").value;
    grad7.push(grade);

}

function grading800() {
    let grade = document.getElementById("L-GIS").value;
    grad8.push(grade);

}

function grading900() {
    let grade = document.getElementById("L-LOS").value;
    grad9.push(grade);

}


function calculate() {
    
    // **************************************//

    var mark1 = grad1[grad1.length - 1];

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

    var mark2 = grad2[grad2.length - 1];

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

    var mark3 = grad3[grad3.length - 1];

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

    var mark4 = grad4[grad4.length - 1];

    if (mark4 === "A++") {
        sum = sum + 10 * 4;
    }
    else if (mark4 === "A+") {
        sum = sum + 9 * 4;
    }
    else if (mark4 === "A") {
        sum = sum + 8 * 4;
    }
    else if (mark4 === "B+") {
        sum = sum + 7 * 4;
    }
    else if (mark4 === "B") {
        sum = sum + 6 * 4;
    }
    else if (mark4 === "C+") {
        sum = sum + 5 * 4;
    }
    else if (mark4 === "C") {
        sum = sum + 4 * 4;
    }
    else if(mark4 === "D"){
        sum = sum + 0 * 4;
        backlog = backlog + 1;
    }

    // ************************************/

    var mark5 = grad5[grad5.length - 1]

    if (mark5 === "A++") {
        sum = sum + 10 * 4;
    }
    else if (mark5 === "A+") {
        sum = sum + 9 * 4;
    }
    else if (mark5 === "A") {
        sum = sum + 8 * 4;
    }
    else if (mark5 === "B+") {
        sum = sum + 7 * 4;
    }
    else if (mark5 === "B") {
        sum = sum + 6 * 4;
    }
    else if (mark5 === "C+") {
        sum = sum + 5 * 4;
    }
    else if (mark5 === "C") {
        sum = sum + 4 * 4;
    }
    else if(mark5 === "D"){
        sum = sum + 0 * 4;
        backlog = backlog + 1;
    }

    // ***********************************/

    var mark6 = grad6[grad6.length - 1]

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

    var mark7 = grad7[grad7.length - 1];

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

    var mark8 = grad8[grad8.length - 1];

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

    var mark9 = grad9[grad9.length - 1];

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

    let sgpa = document.getElementById("demo");
    sgpa.innerText = "Your sgpa:- " + sum / 22 + "  Back:- " + backlog;

    sum = 0;
    backlog = 0;
    event.preventDefault();
};


