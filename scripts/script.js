$( document ).ready(function(){
  console.log( "ready");
  
  //click the go button
  $("#gobutton").click(function(){
    
  //set their name
  let userName = $("#name").val();
  
    //display greeting to them
    $("#userGreeting").text("Hi there, " + userName +"!")
    //show button that allows user to get facts
    $("#factsbutton").show();
   });
  
  //click the facts button
  $("#factsbutton").click(function(){
    //test the button
    //alert("Curiosity killed the cat!");
    
    //create facts
    let userName = $("#name").val();
    let nameLength = userName.length;
    let firstLetter = userName.charAt(0);
    let lastLetter = userName.charAt(userName.length-1);
    const letters = userName.split("");
    letters.reverse();
    let backwards = letters.toString();
    backwards = backwards.replaceAll(",","");
    
    //display facts
    $("#coolFactOne").text("Your name has " + nameLength +" letters in it!")
    $("#coolFactTwo").text("Your name starts with " + firstLetter +"!")
    $("#coolFactThree").text("And it ends with " + lastLetter + "!")
    $("#coolFactFour").text("Your name in reverse is " + backwards + "!")
    
    //display patronum button
    $("#patronusbutton").show();
  });
  
  $("#patronusbutton").click(function(){
    //test the button
    alert("Expecto Patronum");
    
    let userName = $("#name").val();
    let userNAME = userName.toUpperCase();
    let firstLetter = userNAME.charAt(0);
    
    //set Patronus
     if(firstLetter == "A") {
      $("#giraffe").toggle();
    }
    if(firstLetter == "B") {
      $("#panda").toggle();
    }
    if(firstLetter == "C") {
      $("#jellyfish").toggle();
    }
    if(firstLetter == "D") {
      $("#lion").toggle();
    }
    if(firstLetter == "E") {
      $("#dog").toggle();
    }
    if(firstLetter == "F") {
      $("#toucan").toggle();
    }
    if(firstLetter == "G") {
      $("#bird").toggle();
    }
    if(firstLetter == "H") {
      $("#owl").toggle();
    }
    if(firstLetter == "I") {
      $("#hedgehog").toggle();
    }
    if(firstLetter == "J") {
      $("#fawn").toggle();
    }
    if(firstLetter == "K") {
      $("#elephant").toggle();
    }
    if(firstLetter == "L") {
      $("#pig").toggle();
    }
    if(firstLetter == "M") {
      $("#sheep").toggle();
    }
    if(firstLetter == "N") {
      $("#parrot").toggle();
    }
    if(firstLetter == "O") {
      $("#snake").toggle();
    }
    if(firstLetter == "P") {
      $("#merecat").toggle();
    }
    if(firstLetter == "Q") {
      $("#bear").toggle();
    }
    if(firstLetter == "R") {
      $("#cat").toggle();
    }
    if(firstLetter == "S") {
      $("#peacock").toggle();
    }
    if(firstLetter == "T") {
      $("#bee").toggle();
    }
    if(firstLetter == "U") {
      $("#flamingo").toggle();
    }
    if(firstLetter == "V") {
      $("#butterfly").toggle();
    }
    if(firstLetter == "W") {
      $("#wolf").toggle();
    }
    if(firstLetter == "X") {
      $("#racoon").toggle();
    }
    if(firstLetter == "Y") {
      $("#eagle").toggle();
    }
    if(firstLetter == "Z") {
      $("#cheetah").toggle();
    }
    
    //I was an idiot and didn't feel like fixing this. . .
    
    /*if(userName.charAt(0) == "A" || userName.charAt(0) == "a") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "B" || userName.charAt(0) == "b") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "C" || userName.charAt(0) == "c") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "D" || userName.charAt(0) == "d") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "E" || userName.charAt(0) == "e") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "F" || userName.charAt(0) == "f") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "G" || userName.charAt(0) == "g") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "H" || userName.charAt(0) == "h") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "I" || userName.charAt(0) == "i") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "J" || userName.charAt(0) == "j") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "K" || userName.charAt(0) == "k") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "L" || userName.charAt(0) == "l") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "M" || userName.charAt(0) == "m") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "N" || userName.charAt(0) == "n") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "O" || userName.charAt(0) == "o") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "P" || userName.charAt(0) == "p") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "Q" || userName.charAt(0) == "q") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "R" || userName.charAt(0) == "r") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "S" || userName.charAt(0) == "s") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "T" || userName.charAt(0) == "t") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "U" || userName.charAt(0) == "u") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "V" || userName.charAt(0) == "v") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "W" || userName.charAt(0) == "w") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "X" || userName.charAt(0) == "x") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "Y" || userName.charAt(0) == "y") {
      $("#giraffe").toggle();
    }
    if(userName.charAt(0) == "Z" || userName.charAt(0) == "z") {
      $("#giraffe").toggle();
    }*/
    
  });
});