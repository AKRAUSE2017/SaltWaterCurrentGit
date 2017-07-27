var check = 0;

function checkRiddles(){
    if(($("#txtQ1").val() == "DOGFISH SHARK" || "dogfish shark" || "Dogfish Shark" || "Dogfish shark")){
    check=1;
  } if (($("#txtQ2").val() == "ROYAL GRAMMA" || "royal gramma" || "Royal Gramma" || "Royal gramma")){
    check=2;
    console.log(check);
  } if (($("#txtQ3").val() == "HORSESHOE CRAB" || "horseshoe crab" || "Horseshoe Crab" || "Horseshoe crab")){
    check=3;
    console.log(check);
  } if (($("#txtQ4").val() == "LOOKDOWN FISH" || "lookdown fish" || "LookDown Fish" || "LookDown fish")){
    check=4;
    console.log(check);
  } if (($("#txtQ5").val() == "BLIND EYE CAVE FISH" || "blind eye cave fish" || "Blind Eye Cave Fish" || "Blind eye cave fish")){
    check=5;
    console.log(check);
  } if (($("#txtQ6").val() == "BRAIN CORAL" || "brain coral" || "Brain Coral" || "Brain coral")){
    check=6;
    console.log(check);
  }
  alert("You answered "+check+"/6 questions correctly!");
}
