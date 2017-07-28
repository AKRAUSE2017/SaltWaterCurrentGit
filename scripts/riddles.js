var check = 0;

function checkRiddles(){
    if(($("#txtQ1").val() == "DOGFISH SHARK" || $("#txtQ1").val() =="dogfish shark" || $("#txtQ1").val() =="Dogfish Shark" || $("#txtQ1").val() =="Dogfish shark")){
    check=1;
  } if (($("#txtQ2").val() == "ROYAL GRAMMA" ||$("#txtQ2").val() == "royal gramma" || $("#txtQ2").val() =="Royal Gramma" || $("#txtQ2").val() =="Royal gramma")){
    check=2;
    console.log(check);
  } if (($("#txtQ3").val() == "HORSESHOE CRAB" || $("#txtQ3").val() == "horseshoe crab" || $("#txtQ3").val() == "Horseshoe Crab" || $("#txtQ3").val() == "Horseshoe crab")){
    check=3;
    console.log(check);
  } if (($("#txtQ4").val() == "LOOKDOWN FISH" || $("#txtQ4").val() =="lookdown fish" || $("#txtQ4").val() =="LookDown Fish" || $("#txtQ4").val() =="LookDown fish")){
    check=4;
    console.log(check);
  } if (($("#txtQ5").val() == "BLIND EYE CAVE FISH" || $("#txtQ5").val() == "blind eye cave fish" ||$("#txtQ5").val() ==  "Blind Eye Cave Fish" || $("#txtQ5").val() == "Blind eye cave fish")){
    check=5;
    console.log(check);
  } if (($("#txtQ6").val() == "BRAIN CORAL" ||$("#txtQ6").val() ==  "brain coral" ||$("#txtQ6").val() ==  "Brain Coral" || $("#txtQ6").val() == "Brain coral")){
    check=6;
    console.log(check);
  }
  alert("You answered "+check+"/6 questions correctly!");
}
