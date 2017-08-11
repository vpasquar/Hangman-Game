$(document).ready(function() {

    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var wordList = ["goat","dog"];
    var wordChoice = "";
    var guesses = 9;
    var wordChoice = wordList[Math.floor(Math.random() * wordList.length)];


    var wordLetters     = [];
    var guessedLetters  = [];
    var wrongLetters    = [];
    var restart = false

    // take the word to be solved and split it into individual letters
    // use an array with blanks same length as chosen word

    for (var i =0; i < wordChoice.length; i++) {
        wordLetters = wordLetters + wordChoice[i];
         console.log(wordLetters);
          guessedLetters[i] = '_';
           console.log(guessedLetters);
    }


    document.onkeyup = function (event) {


        var letter = event.key;
         var goodGuess = false;
          var moreToGuess = false;
           

        if (restart) {
            alert("game has restarted and new word has been chosen");
            
            wordChoice = wordList[Math.floor(Math.random() * wordList.length)];

            for (var i =0; i < wordChoice.length; i++) {
              wordLetters = wordLetters + wordChoice[i]
               console.log(wordLetters)
                guessedLetters[i] = '_'
                 console.log(guessedLetters)
            }
            restart = false 
            guesses = 9
        }
        
        if (guesses > 0) {

            for (var i = 0; i < wordLetters.length; i++) {

               if (wordLetters[i] == letter) {
                  guessedLetters[i] = letter;
                  goodGuess = true;
               }
               
               if (guessedLetters[i] == '_') {
                   moreToGuess = true ;
               }

            }

            if (goodGuess) {
                alert("you found a letter");
                console.log(guessedLetters);
                

                if (!moreToGuess) {
                    restart = true
                    guesses = 0
                    alert("you won!");
                }

            } 

            else {

                alert("thats not right!");
                console.log("letter" +letter)
                console.log("before" + wrongLetters)
                wrongLetters = wrongLetters + letter + ',';
                console.log("wrong" +wrongLetters);
                guesses--
            }  


             var stats =
            "<p>word status: " + guessedLetters + "</p>" +
            "<p>already guessed " + wrongLetters + "</p>" +
            "<p>guesses left: " + guesses + "</p>";
            console.log(stats)


            $("#game").html(stats);
        }

        else {

        if (!restart) {
      
        restart = true
         wrongLetters = [];
          guesses = 9;

        var stats =
            "<p>"+ "you lost!!!!" + "</p>" +
            "<p>already guessed " + wrongLetters + "</p>" +
            "<p>guesses left: " + guesses + "</p>";
            console.log(stats)

        $("#game").html(stats);  

        }
        }
     
    }


  });
