$(document).ready(function() {

    var crystalOne = Math.floor(Math.random() * 12 + 1);
    var crystalTwo = Math.floor(Math.random() * 12 + 1);
    var crystalThree = Math.floor(Math.random() * 12 + 1);
    var crystalFour = Math.floor(Math.random() * 12 + 1);

    var totalScore = ""; //stores numbers from the crystals
    var sum = 0;
    var crystalValue = 0;
    var wins = 0;
    var losses = 0;

    console.log("Crystal One: " + crystalOne);
    console.log("Crystal Two: " + crystalTwo);
    console.log("Crystal Three: " + crystalThree);
    console.log("Crystal Four: " + crystalFour);

    var randomNumber = Math.floor(Math.random() * (121 - 19) + 19);
    console.log("Random Number: " + randomNumber);
    $("#randomNumber").html("Random Number: " + randomNumber);

    $("#gemOne").attr("data-crystalvalue", crystalOne);
    $("#gemTwo").attr("data-crystalvalue", crystalTwo);
    $("#gemThree").attr("data-crystalvalue", crystalThree);
    $("#gemFour").attr("data-crystalvalue", crystalFour);


    $("#gemOne").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        sum += crystalValue;

        $("#totalScore").text("Your Total Score: " + sum);
        checkforWin();
    });

    $("#gemTwo").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        sum += crystalValue;

        $("#totalScore").text("Your Total Score: " + sum);
        checkforWin();
    });

    $("#gemThree").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        sum += crystalValue;

        $("#totalScore").text("Your Total Score: " + sum);
        checkforWin();
    });

    $("#gemFour").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        sum += crystalValue;

        $("#totalScore").text("Your Total Score: " + sum);
        checkforWin();

    });

    function checkforWin() {
        console.log('sum: ', sum);
        console.log('randomNumber: ', randomNumber);

        if (sum === randomNumber) {
            wins++;
            var html =
                // $("").html("<h2>Loser!</h2>");
                $("#wins").text("Wins: " + wins);
            // var html =
            //     "<p>Wins: " + wins + "</p>" +
            //     "<p>Losses: " + losses + "</p>";

            // document.querySelector("#wins").innerHTML = html;
            reset();

        } else if (sum >= randomNumber) {
            losses++;
            var html =
                $("#losses").text("Losses: " + losses);
            // var html =
            //     "<p>Wins: " + wins + "</p>" +
            //     "<p>Losses: " + losses + "</p>";
            // document.querySelector("#losses").innerHTML = html;
            reset();
        }
    };

  function reset() {
        sum = 0;
        $("#totalScore").text("Your Total Score: " + sum);
        randomNumber = Math.floor(Math.random() * (121 - 19) + 19);
        $("#randomNumber").text("Random Number: " + randomNumber);
    };

});