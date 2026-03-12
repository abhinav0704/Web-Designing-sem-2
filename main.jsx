function calculateResult(){
     let n=document.getElementById("Subjects").value;
     let total=0;
     for(let i=1;i<=n;i++){
        let marks=parseFloat(prompt("Enter marks for subject " + i));
        total=total+marks;
     }
     let average=total/n;
     let result;
     let grade;
     
     if(average>90 && average<=100)
        grade="A";
    else if(average>80 && average<=90)
        grade="B";
    else if(average>70 && average<=80)
        grade="C";
    else if(average>60 && average<=70)
        grade="D";
    else if(average>50 && average<=60)
        grade="E";
    else 
        grade="F";

    if(average>40 && average<=100)
        result="Pass";
    else 
        result="Fail";

document.getElementById("result").innerHTML=
"Total Marks: " + total + "<br>"+
"Average Marks:" + average.toFixed(0) + "<br>" +
"Grade:"+ grade+"<br>"+
"result:"+result;
}