/* Name - variable
3 or 6 holes of golf loop
Score (total number of shots)
9 par for 3 hole, 18 for 6 holes - Par 3 for every hole
Over Par "Nice try, (name/variable)... Your total par was +(par variable)"
Under Par "Great job, (name/variable)! Your total par was -(par variable)"
Even Par "Good game, (name/variable) Your total par was: 0."
Breakit breakme break - w3schools - stop loop when ____insert condition____
NaN - Not a Number
*/
let golfName = prompt("Welcome to GC Minigolf! What's your name?");
let total = 0;

if ( golfName !== null && golfName !=="")
{
    let game = Number(prompt("Hey there, "+ golfName +"! Would you like to play 3 or 6 holes today?"));

    breakme: if(game === 3 || game === 6) {
        for (i =1; i <= game; i++) {
            let putts = Number(prompt("How many putts for hole " + i + "? (Par: 3)"));
            if (isNaN(putts) || putts ===0) {
                console.log ("Sorry, I didn't catch that. Please enter a number to try again.");
                //number must be added
                break breakme;
            }
            else {
                total += putts;
            }

        }
    

let par = game *3;
total -= par;

if (total < 0) {
    console.log ("Great job, " + golfName + "! Your total par was: " + total);
} else if (total > 0) {
    console.log("Nice try, " + golfName + "... Your total par was: +" + total);
} else if (total === 0) {
    console.log("Good game, " + golfName +". Your total par was: 0");
}
    }
else {
    console.log ("Sorry, you'll have to refresh to try again.");
}


}else {
    console.log("Please refresh to try golfing again. We don't talk to strangers.");
}
