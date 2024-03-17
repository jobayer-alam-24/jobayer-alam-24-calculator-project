function allclear(){
    document.getElementById("show").value = " ";
}
function percentage(pers){
    document.getElementById("show").value += pers;
}
function divide(division){
    document.getElementById("show").value += division;
}
function seven(seven){
    document.getElementById("show").value += seven;
}
function eight(eight){
    document.getElementById("show").value += eight;
}
function nine(nine){
    document.getElementById("show").value += nine;
}
function ex(ex){
    document.getElementById("show").value += ex;
}
function four(four){
    document.getElementById("show").value += four;
}
function five(five){
    document.getElementById("show").value += five;
}
function six(six){
    document.getElementById("show").value += six;
}
function minus(minus){
    document.getElementById("show").value += minus;
}
function ak(ak){
    document.getElementById("show").value += ak;
}
function two(dui){
    document.getElementById("show").value += dui;
}
function tin(tin){
    document.getElementById("show").value += tin;
}
function plus(plus){
    document.getElementById("show").value += plus;
}
function zero(zero){
    document.getElementById("show").value += zero;
}
function double_zero(double_zero){
    document.getElementById("show").value += double_zero;
}
function dot(dot){
    document.getElementById("show").value += dot;
}
function equal(result){
    var a = document.getElementById("show").value;
    var result = eval(a);
    document.getElementById("show").value = result;
}
