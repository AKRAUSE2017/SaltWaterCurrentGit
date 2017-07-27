var check = 0;

function checkRiddles(){
    if(($("#txtQ1").val() == "DOGFISH SHARK")){
    check=1;
  } if (($("#txtQ2").val() == "ROYAL GRAMMA")){
    check=2;
    console.log(check);
  } if (($("#txtQ3").val() == "HORSESHOE CRAB")){
    check=3;
    console.log(check);
  } if (($("#txtQ4").val() == "LOOKDOWN FISH")){
    check=4;
    console.log(check);
  } if (($("#txtQ5").val() == "BLIND EYE CAVE FISH")){
    check=5;
    console.log(check);
  } if (($("#txtQ6").val() == "BRAIN CORAL")){
    check=6;
    console.log(check);
  }
  alert("You answered "+check+"/6 questions correctly!");
}
