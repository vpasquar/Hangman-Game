$(document).ready(function() {

    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var wordList = ["goat","dog"];
    var wordChoice = "";
    var guesses = 9;
    var guessLog = "";
    var wordChoice = wordList[Math.floor(Math.random() * wordList.length)];


    var wordLetters     = [];
    var guessedLetters  = [];

    // take the word to be solved and split it into individual letters
    // use an array with blanks same length as chosen word

    for (var i =0; i < wordChoice.length; i++) {
        wordLetters = wordLetters + wordChoice[i]
        wordLetters = wordLetters + ","
        console.log(wordLetters)
        guessedLetters = guessedLetters + "_" + ","
        console.log(guessedLetters)
    }


    document.onkeyup = function (event) {

        var letter = event.key
        var goodGuess = false
        var moreToGuess = false

        if (guesses > 0) {

            for (var i = 0; i < wordLetters.length; i++) {

               if (wordLetters[i] == letter) {
                  console.log(letter)
                  guessedLetters[i] = letter;
                  console.log(guessedLetters)
                  goodGuess = true;
               }
               if (guessedLetters[i] == '_') {
                   moreToGuess = true ;
               }

            }

            if (goodGuess) {
                alert("you found a letter");
                console.log(guessedLetters)
                if (!moreToGuess) {
                    alert("you won!")
                }
            } 

            else {
                alert("thats not right!");
            }  
        }
     
    }
    
    // function guessLetter(letter) {
    //    var goodGuess = false;
    //    var moreToGuess = false;
    //    for (var i = 0; i < wordLetters.length; i++) {
    //        if (wordLetters[i] == letter) {
    //           guessedLetters[i] = letter;
    //            goodGuess = true;
    //        }
   //         if (guessedLetters[i] == '_') {
   //             moreToGuess = true;
   //         }
   //     }
   //     if (goodGuess) {
   //         console.log('Yay, you found a letter!');
   //         console.log(guessedLetters.join(''));
   //         if (!moreToGuess) {
   //             console.log('YOU WON!');
   //         } 
   //     } else {
   //         console.log('Oh noes, thats not right!');
   //     }
  //  }
//
  //  document.onkeyup = function (event) {    
  //      
   //     var userLetter = event.key
    //    for (var guesses = 9; guesses < 0; guesses--) {
    //      guessLetter(userLetter[guesses]);
     ///   } 
//
       
    // This function is run whenever the user presses a key.

  });
