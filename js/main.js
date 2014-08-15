/**
 * Name: Phirom Yim
 * Instructor: Fialishia O Loughlin
 * Date: 8/13/14
 * Assignment: Goal1: Assignment: Duel2
 */

//self-executing function (storage container for variables to use for main part of the code
(function(){
                                                            //all contents necessary for js file
    console.log("Fight!!!");                                // to verified that everything is set up correctly
        //creating global variables
        //player name
    var fighterOne = ["Thor", 20, 100];                        //changed variable to fighterOne array literal notations with fighter name, damage, and health
    var fighterTwo = ["Captain America", 20, 100];                          //changed variable to fighterTwo array literal notations with fighter name, damage, and health

    //player damage
   // var player1Damage = 20;                                 //defining player 1 damage to 20
   // var player2Damage = 20;                                 //defining player 2 damage to 20

    //player health
  //  var playerOneHealth = 100;                              //defining player one health at 100
   // var playerTwoHealth = 100;                              //defining player two health at 100

    var round = 0;                                          //assigning variable for fighting rounds

    function fight(){                                       //program reads the function
        //code will go here
        // console.log("in the fight function");   //print to check function


        //alert box with string concatenation
        alert(fighterOne[0] +":"+ fighterOne[2] +" *START* " + fighterTwo[0] +":"+ fighterTwo[2]);


        for(var i=0; i<10;i++) {                            //for loop, if i is less than 10   // i ++ is adding 1 increment
            //random formula is - Math.floor(Math.random()*(max-min)+min;
            //code to be executed

            var minDamage1 = fighterOne[1] * .5;            //assigning damage to fighterOne array index 1
            var minDamage2 = fighterTwo[1] * .5;            //assigning damage to player 2 to array index 1

            //creating equation for player 1 damage
            var f1 = Math.floor(Math.random() * (fighterOne[1] - minDamage1) + minDamage1); //defining variable for f1 to equal to randomized math equation
            //creating equation for player 2 damage
            var f2 = Math.floor(Math.random() * (fighterTwo[1] - minDamage2) + minDamage2); //defining variable for f2 to equal to randomized math equation, changed player 2 to fighterTwo area index 1

            //console.log(f1);                              //print f1 to console to check
            //console.log(f2);                              //print f2 to console to check

            //inflict damage
            fighterOne[2] -= f1;                          //assign area index 2 to inflict damage with math.floor equation for fighterOne

            fighterTwo[2] -= f2;                          //assign array index 2 to inflict damage with math.floor equation for fighterTwo

// alert(playerOneName + ": " + playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth); //alert box with string concatenation
//console.log(playerOneName + ": " + playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth);


            //check for victor
            var result = winnerCheck();                     //defining variable result to  check for winner //return results
            console.log(result);                            //print result to console
            if (result === "no winner")                     //conditional if else statements //execute if true
            {
                round++;                                    //
                alert(fighterOne[0] + ":" + fighterOne[2] + "  *ROUND " + round + " OVER" + "*  " + fighterTwo[0] + ":" + fighterTwo[2]);                                       //alert both player names, round number and both player health with replacement of variables to array literals

            } else {                                        //conditional if else statement //execute if true
                alert(result);                              //alert results
                break;                                      //create break to break the loop
            }

        }

}                                                           //close for loop

    function winnerCheck(){                                 //second function for program to read
        console.log("in winnerCheck FN");                   //print to console
        var result="no winner";                             //assign variable result for no winner
        if(fighterOne[2]<1 && fighterTwo[2]<1){         //if playerOneHealth is less than 1 AND playerTwoHealth is also less than one execute statement block
            result = "You Both Die";                        //if both statements are true run result
        }else if(fighterOne[2]<1){                        //if statement is true run code, test one, replaced variable to array index 2
            result = fighterTwo[0]+" Wins!!!";
            //replaced variable to array index 0
        }else if(fighterTwo[2]<1){                        //if statement is true run code, test two, replaced variable to array index 2
            result = fighterOne[0]+" Wins!!!"
        }//replaced variable to array index 0
        return result;                                      //return result after condition
    }


    //The program starts below//
    console.log("program starts");                          //print to console
    fight();                                                // program will perform the function


})();                                                       //close function

