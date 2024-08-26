var score;
score = prompt( "Please input the score" );
var x = Boolean(score);
if( 100> score && score>= 85 )
{
console.log("You got a A");
}
else if( 85>score && score>=75)
{
console.log("You got a B");
}
else if(75> score && score >= 65)
{
console.log("You got a C");
}
else if( 65>score && score>= 50 )
{
console.log("You got a D");
}
else if( 50>score && score>= 0)
{
console.log( "You got a F");
}
else if( x== false){
console.log( "Not a Number");}
else if( score==100)
{
console.log("perfect score");
}
else {
console.log( "Invalid score" );
}
