
// JavaScript Palidrome Test

var JsTextBox = document.getElementById("JsText");


JsTextBox.onkeyup = function () {

    let textEntered = JsTextBox.value;

    if (textEntered == "") {
        JsTextBox.style.backgroundColor = "White";
    } else if (checkPalindrom(textEntered) == true) {
        JsTextBox.style.backgroundColor = "#36a143";
    }
    else {
        JsTextBox.style.backgroundColor = "Red";
    }

};

function checkPalindrom(textEntered) {
    return textEntered == textEntered.split('').reverse().join('');
}

// Sql Palidrome Test

var SqlTextBox = document.getElementById("SqlText");
var SqlBtn = document.getElementById("SqlBtn");

SqlBtn.onclick = function () {

    let textEntered = SqlTextBox.value;
    if (textEntered == "") {
        SqlTextBox.style.backgroundColor = "White";
        alert("Please enter a word ");
        return;
    }

    $.ajax({
        type: "Post",
        dataType: "json",
        url: "Home/CheckPalindromeSqlServer",
        data: { word: textEntered },
        success: function (result) {

            if (result == true || result == "true") {
              
                SqlTextBox.style.backgroundColor = "#36a143";
            }
            else {
                SqlTextBox.style.backgroundColor = "Red";
            }
        },
        error: function (data) {
            console.log(data);
        }

    });

}


// Csharp Palidrome Test

var CsharpTextBox = document.getElementById("CsharpText");
var CsharpBtn = document.getElementById("CsharpBtn");

CsharpBtn.onclick = function () {

    let textEntered = CsharpTextBox.value;
    if (textEntered == "") {
        CsharpTextBox.style.backgroundColor = "White";
        alert("Please enter a word ");
        return;
    }

    $.ajax({
        type: "Post",
        dataType: "json",
        url: "Home/CheckPalindrome",
        data: { word: textEntered },
        success: function (result) {

            if (result == true) {
                CsharpTextBox.style.backgroundColor = "#36a143";
            }
            else {
                CsharpTextBox.style.backgroundColor = "Red";
            }
        },
        error: function (data) {
            console.log(data);
        }

    });

}