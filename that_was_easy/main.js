 function sayThatWasEasy() {
 var thatwasEasy = new Audio("that_was_easy.mp3");
 - thatwasEasy.play();
  }
 $("#easy").on("click", sayThatWasEasy);
 $(document).keypress();
 function delegateKeypress(event) {
     if (event.charCode ==32);
     $("easy").trigger("click");
 }
 