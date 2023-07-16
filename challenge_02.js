/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */


let userName, userAge;

userName = prompt("Gib deinen Namen ein:");
userAge = parseInt(prompt("Gib dein Alter ein:"));

if (userAge > 0 && userAge < 6)
{
    console.log("Max trinkt Milch");
} else if (userAge > 5 && userAge < 13)
{
    console.log("Max trinkt Saft");
} else if (userAge > 12 && userAge < 18)
{
    console.log("Max trinkt Cola");
} else if (userAge > 17)
{
    console.log("Max trinkt Wein");
}