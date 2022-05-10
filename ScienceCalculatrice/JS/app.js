const Screen1 = document.getElementById("ProblemScreen");
const Screen2 = document.getElementById("SecondScreen");
const CalculatorScreen2 = document.querySelector(".CalculatorScreen2")
const Brand = document.getElementsByClassName("Brand")[0];
Brand.innerHTML = "";

const CEButton = document.getElementById("CeKey");
const CButton = document.getElementById("CKey");
const BackSpaceButton = document.getElementById("BackSpaceKey");
const DevideButton = document.getElementById("DevideKey");
const MultipicationButton = document.getElementById("MultipicationKey");
const MinusButton = document.getElementById("MinusKey");
const SummessionButton = document.getElementById("SummessionKey");

const OnButton = document.getElementById("ON")
const OffButton = document.getElementById("OFF")
const ClButton = document.getElementById("C")

const ZeroButton = document.getElementById("0Key");
const OneButton = document.getElementById("1Key");
const TwoButton = document.getElementById("2Key");
const ThreeButton = document.getElementById("3Key");
const FourButton = document.getElementById("4Key");
const FiveButton = document.getElementById("5Key");
const SixButton = document.getElementById("6Key");
const SevenButton = document.getElementById("7Key");
const EightButton = document.getElementById("8Key");
const NineButton = document.getElementById("9Key");
const PointButton = document.getElementById("PointKey");

const EqualButton = document.getElementById("EqualKey");

var Screen1Value = "";
var Expression = "";
var SpecialOperation = ""

OnButton.addEventListener("click", ()=>{
    Screen1.innerHTML = ""
    Screen2.innerHTML = ""
    Screen1Value = ""
    Expression = ""
    ans = ""
    CalculatorScreen2.style.color ="initial"
    
})

OffButton.addEventListener("click", ()=>{
    CalculatorScreen2.style.color ="transparent"
})

OneButton.addEventListener("click", ()=>{
    Screen1Value = Screen1Value + "1";
    Expression = Expression + "1";
    Screen1.innerHTML = Screen1Value;
})
TwoButton.addEventListener("click", ()=>{
    Screen1Value = Screen1Value + "2";
    Expression = Expression + "2";
    Screen1.innerHTML = Screen1Value;
})
ThreeButton.addEventListener("click", ()=>{
    Screen1Value = Screen1Value + "3";
    Expression = Expression + "3";
    Screen1.innerHTML = Screen1Value;
})
FourButton.addEventListener("click", ()=>{
    Screen1Value = Screen1Value + "4";
    Expression = Expression + "4";
    Screen1.innerHTML = Screen1Value;
})
FiveButton.addEventListener("click", ()=>{
    Screen1Value = Screen1Value + "5";
    Expression = Expression + "5";
    Screen1.innerHTML = Screen1Value;
})
SixButton.addEventListener("click", ()=>{
    Screen1Value = Screen1Value + "6";
    Expression = Expression + "6";
    Screen1.innerHTML = Screen1Value;
})
SevenButton.addEventListener("click", ()=>{
    Screen1Value = Screen1Value + "7";
    Expression = Expression + "7";
    Screen1.innerHTML = Screen1Value;
})
EightButton.addEventListener("click", ()=>{
    Screen1Value = Screen1Value + "8";
    Expression = Expression + "8";
    Screen1.innerHTML = Screen1Value;
})
NineButton.addEventListener("click", ()=>{
    Screen1Value = Screen1Value + "9";
    Expression = Expression + "9";
    Screen1.innerHTML = Screen1Value;
})
ZeroButton.addEventListener("click", ()=>{
    Screen1Value = Screen1Value + "0";
    Expression = Expression + "0";
    Screen1.innerHTML = Screen1Value;
})
PointButton.addEventListener("click", ()=>{
    Screen1Value = Screen1Value + ".";
    Expression = Expression + ".";
    Screen1.innerHTML = Screen1Value;
})

DevideButton.addEventListener("click", ()=>{
    Screen1Value = Screen1Value + "÷";
    Expression = Expression + "/";
    Screen1.innerHTML = Screen1Value; 
    Screen2.innerHTML = Screen1Value;
    Screen1.innerHTML = ""
    Screen1Value = ""
})
MultipicationButton.addEventListener("click", ()=>{
    Screen1Value = Screen1Value + "X";
    Expression = Expression + "*";
    Screen1.innerHTML = Screen1Value;
    Screen2.innerHTML = Screen1Value;
    Screen1.innerHTML = ""
    Screen1Value = ""
})
MinusButton.addEventListener("click", ()=>{
    Screen1Value = Screen1Value + "-";
    Expression = Expression + "-";
    Screen1.innerHTML = Screen1Value;
    Screen2.innerHTML = Screen1Value;
    Screen1.innerHTML = ""
    Screen1Value = ""
})
SummessionButton.addEventListener("click", ()=>{
    Screen1Value = Screen1Value + "+";
    Expression = Expression + "+";
    Screen1.innerHTML = Screen1Value;
    Screen2.innerHTML = Screen1Value;
    Screen1.innerHTML = ""
    Screen1Value = ""
})
EqualButton.addEventListener("click",()=>{
    if(Expression[0]==="P"){
        r = Number(Expression.slice(1,Expression.length))
        Expression = nPr(n,r)
    }
    if(Expression[0]==="C"){
        r = Number(Expression.slice(1,Expression.length))
        Expression = nCr(n,r)
    }
    Screen2.innerHTML = Screen1Value;
    ans = eval(Expression);
    Screen1Value = String(ans);
    Screen1.innerHTML = ans;
})