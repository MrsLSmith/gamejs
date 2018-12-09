function start() {
  var dice1 = Randomizer.nextInt(1,6);
  var dice2 = Randomizer.nextInt(1,6);
  var roll = dice1+dice2;
  
  println("You rolled " + dice1 + " and a " + dice2);
  
  if(roll==7 || roll==11){
    println("You win!");
    } else if (roll==2 || roll==3 || roll==12) {
      println("You lose!");
    } else {
      println("Roll again.");
    }
}
