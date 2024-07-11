//tag name count
function elementCount(){
    var info = document.getElementsByTagName('button');
    alert(info.length);
}
//
function classExample(){
    document.getElementsByClassName('p')[2].innerHTML="Hello";
}
//txt
var data="welcome";
function vMessage()
{
    document.getElementById('vm').innerHTML=data.repeat(5);
}
function selecti(){
    alert("you selected email !");
 }
 
//the length
var text="this is paromita"
function lengthShow()
{
    document.getElementById('lg').innerHTML=text.length;
}
//the time
function dateShow()
{
    document.getElementById('dS').innerHTML=Date();
}
//text concatenate
var text1 = "Jhumur";
var text2 = "Khastagir";
var text3 = text1+" "+text2;
function tConcatenate()
{
    document.getElementById('t_con').innerHTML=text3;
}
//paragraph change
function pChange()
{
    document.getElementById('p_c').innerHTML="paragraph changed";
}
//modulus
var number1 = 42;
var number2 = 4;
var result5= number1%number2;
function rModulus(){
    document.getElementById('r_mo').innerHTML=result5;
}
//division
var number1 = 44;
var number2 = 4;
var result4= number1/number2;
function rDivision(){
    document.getElementById('r_d').innerHTML=result4;
}

//multification
var number1 = 4;
var number2 = 6;
var result2= number1*number2;
function rMultification(){
    document.getElementById('r_m').innerHTML=result2;
}
//variable subtraction
var number1 = 14;
var number2 = 6;
var result1= number1-number2;
function rSubtraction(){
    document.getElementById('r_sub').innerHTML=result1;
}
//variable
var number1 = 12;
var number3 = 3;
number3+=number1;
function raAddition(){
    document.getElementById('r_asg').innerHTML=number3;
}
//variable
var number1 = 15;
var number2 = 6;
result= number1+number2;
function rAddition(){
    document.getElementById('r_a').innerHTML=result;
}

//show the console
function cLog(){
    console.log("hello world");
}
//show the alert
function sAlert(){
    window.alert("hello world");
}
//show the text
function dWrite(){
    document.write("Hello world");
}
//show/hide text
function sText()
{
    document.getElementById('sh_text').style.display="block";
}
function hText()
{
    document.getElementById('sh_text').style.display="none";
}
//color change
function colorChange()
{
    document.getElementById('t_color').style.color="red";
}
//bulb on/off
function bulbOn(){
    document.getElementById('b_img').src="images/on.gif";
}
function bulbOff(){
    document.getElementById('b_img').src="images/off.gif";
}
//show the local date
function showDate(){
    document.getElementById('t_d').innerHTML=
    Date();
}
//ex1
function textChange()
{
    document.getElementById('t_c').innerHTML="Hello world I am jhumur";
}