/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
chessBoard3Beeps();
chessBoard2Beeps();
chessBoard3Beeps();
chessBoard2Beeps();
chessBoard3Beeps();
}

function straightLine(){
   while (frontIsClear()){
         move();
      }
   }
   
function diagonalBeeper(){
   while (frontIsClear()){
         putBeeper();
         move();
         turnLeft();
         move();
         turnRight();
         
      }
   if (frontIsBlocked()){
         putBeeper();
      }
   }
   
   
function chessBoard3Beeps(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   turnLeft();
   
   }
   
function chessBoard2Beeps(){
   move();
   turnLeft();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   turnRight();
   move();
   turnRight();
   }
