
console.log("----1.Calculate Test Score-----")
function calculateScore(score1,score2,score3) 
{
    let totalScore=score1+score2+score3;
    return totalScore;
}
 let result=calculateScore(100,50,60);
console.log("Total Score: "+result);
console.log("--------------------------------------");



console.log("----1.Check Test Status-----")
function checkTestStatus(test_score) 
{
if (test_score>=40)
{
console.log("Test status is PASS");
}
else
{
console.log("Test status is FAIL");
}
}
checkTestStatus(39.6);
console.log("--------------------------------------");


