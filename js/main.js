/**
 * Name: Phirom Yim
 * Instructor: Fialishia O Loughlin
 * Date: 8/8/14
 * Assignment: Goal1: Assignment: Duel1
 */

//self-executing function (storage container for variables to use for main part of the code
(function(){
                                                            //all contents necessary for js file
    console.log("Fight!!!");                                // to verified that everything is set up correctly
        //creating global variables
        //player name
    var playerOneName = "Spiderman";                        //defining player one
    var playerTwoName = "Batman";                           //defining player two

    //player damage
    var player1Damage = 20;                                 //defining player 1 damage to 20
    var player2Damage = 20;                                 //defining player 2 damage to 20

    //player health
    var playerOneHealth = 100;                              //defining player one health at 100
    var playerTwoHealth = 100;                              //defining player two health at 100

    var round = 0;                                          //assigning variable for fighting rounds

    function fight(){                                       //program reads the function
        //code will go here
        // console.log("in the fight function");   //print to check function


        //alert box with string concatenation
        alert(playerOneName+":"+ playerOneHealth+" *START* " +playerTwoName+":"+playerTwoHealth);


        for(var i=0; i<10;i++) {                            //for loop, if i is less than 10   // i ++ is adding 1 increment
            //random formula is - Math.floor(Math.random()*(max-min)+min;
            //code to be executed

            var minDamage1 = player1Damage * .5;            //assigning damage to player 1
            var minDamage2 = player2Damage * .5;            //assigning damage to player 2

            //creating equation for player 1 damage
            var f1 = Math.floor(Math.random() * (player1Damage - minDamage1) + minDamage1); //defining variable for f1 to equal to randomized math equation
            //creating equation for player 2 damage
            var f2 = Math.floor(Math.random() * (player2Damage - minDamage2) + minDamage2); //defining varialbe for f2 to equal to randomized math equation

            //console.log(f1);                              //print f1 to console to check
            //console.log(f2);                              //print f2 to console to check

            //inflict damage
            playerOneHealth -= f1;                          //equation of inflicted damage for player 1
            playerTwoHealth -= f2;                          //equation for inflicted damage for player 2

// alert(playerOneName + ": " + playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth); //alert box with string concatenation
//console.log(playerOneName + ": " + playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth);


            //check for victor
            var result = winnerCheck();                     //defining variable result to  check for winner //return results
            console.log(result);                            //print result to console
            if (result === "no winner")                     //conditional if else statements //execute if true
            {
                round++;                                    //
                alert(playerOneName + ":" + playerOneHealth + "  *ROUND " + round + " OVER" + "*  " + playerTwoName + ":" + playerTwoHealth);                                       //alert both player names, round number and both player health

            } else {                                        //conditional if else statement //execute if true
                alert(result);                              //alert results
                break;                                      //create break to break the loop
            }

        }

}                                                           //close for loop

    function winnerCheck(){                                 //second function for program to read
        console.log("in winnerCheck FN");                   //print to console
        var result="no winner";                             //assign variable result for no winner
        if(playerOneHealth<1 && playerTwoHealth<1){         //if playerOneHealth is less than 1 AND playerTwoHealth is also less than one execute statement block
            result = "You Both Die";                        //if both statements are true run result
        }else if(playerOneHealth<1){                        //if statement is true run code, test one
            result = playerTwoName+" Wins!!!"

        }else if(playerTwoHealth<1){                        //if statement is true run code, test two
            result = playerOneName+" Wins!!!"
        }
        return result;                                      //return result after condition
    }


    //The program starts below//
    console.log("program starts");                          //print to console
    fight();                                                // program will perform the function


})();                                                       //close function

