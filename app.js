//Chapter 21-25

//Task 01
var firstName=prompt("Enter Your First Name");
var lastName=prompt("Enter Your Last Name");
var fullName=firstName+lastName;
alert("Welcome "+fullName);

//Task 02
var favMobile=prompt("Enter your favourite mobile phone model");
var length=favMobile.length;
document.write("My favourite phone is: " + favMobile);
document.write("<br>Length of string: " + length);

//Task 03
var word="Pakistani";
var index=word.indexOf('n');
document.write("String: "+word);
document.write("<br>Index of 'n': "+index);

//Task 04
var word="Hello World";
var index=word.lastIndexOf('l');
document.write("String: "+word);
document.write("<br>Last index of 'l': "+index);

//Task 05
var word="Pakistani";
var char=word[3];
document.write("String: "+word);
document.write("<br>Character at index 3: "+char);

//Task 06
var firstName=prompt("Enter Your First Name");
var lastName=prompt("Enter Your Last Name");
var fullName=firstName.concat(" "+lastName);
alert("Welcome "+fullName);

//Task 07
var word="Hyderabad";
for(i=0;i<word.length;i++){
    if(word.slice(i,i+5)=="Hyder")
    {
        var newword="Islam"+word.slice(i+5,);
        break;
    }
}
document.write("City: "+word);
document.write("<br>After replacement: "+newword);

//Task 08
var message="Ali and Sami are best friends. They play cricket and football together."
var arr=message.split("and");
message=arr.join('&');
document.write(message);

//Task 09
var val="472";
var typ=typeof(val)
document.write("Value: "+val);
document.write("<br>Type: "+typ);
val=Number(val);
typ=typeof(val);
document.write("<br>Value: "+val);
document.write("<br>Type: "+typ);

//Task 10
var input=prompt("Enter Word");
var output=input.toUpperCase();
document.write("User input: "+input);
document.write("<br>Upper case: "+output);

//Task 11
var input=prompt("Enter Word");
var output=input.charAt(0).toUpperCase()+input.slice(1,);
document.write("User input: "+input);
document.write("<br>Upper case: "+output);

//Task 12
var num=35.36;
var str=num.toString().split(".").join("");
document.write("Number: "+num);
document.write("Result: "+str);

//Task13
var username=prompt("Enter Username");
for(i=0;i<username.length;i++)
{
    if(username.charCodeAt(i)==33||username.charCodeAt(i)==44||username.charCodeAt(i)==46||username.charCodeAt(i)==64)
    {
        alert("Please Enter a valid username");
        break;
    }
}

//Task 14
var A=["cake","apple pie","cookie","chips","patties"];
var found="";
var srch=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
for(i=0;i<A.length;i++){
    if(A[i]===srch.toLowerCase())
    {
        found=A[i];
        break;
    }
}

if(found!="")
{
    document.write(found + " is avialable at index "+i +" in our bakery");
}
else{
        document.write("We are sorry. "+srch + " is not avialable in our bakery");
}

//Task 15
var paswd=prompt("Enter Password (at least 6 Character and must be alphanumeric");
var flag='invalid';
document.write("Entered Password: "+paswd);
if(paswd.length>=6){
    if(paswd.charCodeAt(0)>=48 && paswd.charCodeAt(0)<=57){
        document.write("<br>Password can not begin with a number");
        document.write("<br>Please enter a valid password");
    }
    else{
        for(i=1;i<paswd.length;i++){
            if(paswd.charCodeAt(i)>=48 && paswd.charCodeAt(i)<=57){
                document.write("<br>Valid Password");
                flag='valid';
                break;
            }
        }
        if(flag!='valid'){
        document.write("<br>Password must contain a number");
        document.write("<br>Please enter a valid password");
        }
    }
}
else{
    document.write("<br>Password must be at least 6 character long");
    document.write("<br>Please enter a valid password");
}

//Task 16
var university = "University of Karachi";
var arr=university.split("");
for(i=0;i<arr.length;i++){
    document.write(arr[i]+"<br>");
} 

//Task 17
var input=prompt("Enter word");
var lstchar=input.length-1;
var ch=input.charAt(lstchar);
document.write("User input: "+input);
document.write("<br>Last Character of input: "+ch);

//Task 18
var word="The quick brown fox jumps over the lazy dog";
var count=0;
for(i=0;i<word.length;i++){
    if(word.toLowerCase().slice(i,i+3)=="the")
    {
       count+=1;
    }
}


//Chapter 26-30

//Task 01
var num=prompt("Enter a positive integer");
document.write("Number: "+Number(num));
document.write("<br>round of value: "+Math.round(num));
document.write("<br>floor value: "+Math.floor(num));
document.write("<br>ciel value: "+Math.ceil(num));

//Task 02
var num=prompt("Enter a negative floating point number");
document.write("Number: "+Number(num));
document.write("<br>round of value: "+Math.round(num));
document.write("<br>floor value: "+Math.floor(num));
document.write("<br>ciel value: "+Math.ceil(num));

//Task 03
var num=prompt("Enter a number");
document.write("The absoultue value of "+num+": is"+Math.abs(num));

//Task 04
var num=Math.random()*6;
document.write("<br>random dice value: "+Math.ceil(num));

//Task 05
var num=Math.random()*2;
document.write(Math.ceil(num)+"<br>random coin value: ");
document.write(Math.ceil(num)==2?"Heads":"Tails");

//Task 06
var num=Math.floor((Math.random()*100)+1);
document.write("<br>random number between 1 and 100: "+num);

//Task 07
var input=prompt("Enter weight in kilograms");
var value="";
for(i=0;i<input.length;i++){
    if(input.charCodeAt(i)>=48 && input.charCodeAt(i)<=57 || input.charCodeAt(i)==46){
        value+=input[i];
    }
}
value=Number(value);
document.write("The weight of user is "+value+" kilograms");

//Task 08
var secret=Math.floor((Math.random()*10)+1);
var guess=+prompt("Enter a number between 1 & 10");
if(guess==secret){
    alert("Congratulatons! Correct Guess!!!");
}
else
{
    alert("Try again!");
}


//Chapter 31-34

//Task 01
document.write(Date());

//Task 02
var d=new Date();
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
alert("Current Month: "+months[d.getMonth()]);

//Task 03
var d=new Date();
var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
alert("Today is : "+days[d.getDay()]);

//Task 04
var d=new Date();
if(d.getDay()==0||d.getDay()==6){
    alert("It's Fun day");
}

//Task 05
var d=new Date();
if(d.getDate()<=15){
    alert("First fifteen days of the month");
}
else
{
    alert("Last fifteen days of the month");
}

//Task 06
var d=new Date();
document.write("Current Date: "+Date());
var milisecond=d.getTime();
var mili=d.getTime();
document.write("<br>Elapsed milliseconds since January 1, 1970: "+milisecond);
var minutes=d.getTime()/60000;
document.write("<br>Elapsed seconds since January 1, 1970: "+minutes);

//Task 07
var d=new Date();
if(d.getHours()>=0 || d.getHours()<12){
    alert("It's AM")
}
else
{
    alert("It's PM");
}

//Task 08
var laterDate=new Date("31 Dec,2020");
document.write("Later date: "+laterDate);    

//Task 09
var ramzan=new Date("25 Apr,2020");
var date=new Date();
var miliramzan=ramzan.getTime();
var milidate=date.getTime();
var diff=milidate-miliramzan;
var days=diff/(1000*60*60*24);
document.write(Math.ceil(days)+" days have been passed since 1st Ramadan,2020");

//Task 10
var refDate=new Date(prompt("Enter reference Date"));
var d=new Date("1 Jan,2015");
var diff=(refDate.getTime()-d.getTime())/(1000*60);
document.write("On reference date: "+refDate);
document.write("<br>"+Math.ceil(diff)+" seconds have been passed");

//Task 11
var d=new Date();
document.write("Current Date: "+d);
d.setHours(d.getHours()-1);
document.write("<br>1 hour ago, it was "+d);

//Task 12
var d=new Date();
document.write("Current Date: "+d);
d.setFullYear(d.getFullYear()-100);
document.write("<br>100 year back, it was "+d);

//Task 13
var age=+Number(prompt("Enter your age"));
var d=new Date();
var year=d.getFullYear()-age;
document.write("Your age is "+age);
document.write("<br>Your birth year is "+year);

//Task 14
var customer=prompt("Enter your Name");
var d=new Date();
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
var month=months[d.getMonth];
var units=+prompt("Enter number of units");
var charges=16;
var lateSurcharge=350;
var netAmount=units*charges;
var grossAmount=netAmount+lateSurcharge;
document.write("<h1>K-Electric Bill</h1><br>");
document.write("<br>Customer Name: "+customer);
document.write("<br>Month: "+month);
document.write("<br>Number of units: "+units);
document.write("<br>Charges per unit: "+charges);
document.write("<br><br>Net Amount Payable (within Due Date): "+netAmount);
document.write("<br>Late payment surcharge : "+lateSurcharge);
document.write("<br>Gross Amount Payable (after Due Date): "+grossAmount);


//Chapter 35-38

//Task 01
function showDate(){
    document.write(Date());
}
showDate();

//Task 02
function fullName(){
var firstName=prompt("Enter Your First Name");
var lastName=prompt("Enter Your Last Name");
    alert("Hello "+firstName +" "+lastName);
}
fullName();

//Task 03
function add(){
var a=+prompt("Enter 1st Number");
var b=+prompt("Enter 2nd Number");
    alert(a+b);
}
add();

//Task 04
function calc(num1,num2,op){
    if(op==='+'){
        document.write(num1+num2);
    }
    else if(op==='-')
    {
        document.write(num1-num2);
    }
    else if(op==='*')
    {
        document.write(num1*num2);
    }
    else if(op==='/')
    {
        document.write(num1/num2);
    }
    else if(op==='%')
    {
        document.write(num1%num2);
    }
}
var val1=parseInt(prompt("Enter 1st number"));
var val2=parseInt(prompt("Enter 2nd number"));
var operation=prompt("Enter operation you want to perform");
calc(val1,val2,operation)

//Task 05
function sq(a){
    alert("square of "+a +" is "+ a**2);
}
sq(5);

//Task 06
function fact(a){
    var num=1;
    for(i=a;i>0;i--){
        num=num*i;
    }
    alert(num);
}
fact(5)

//Task 07
function counting(strt,en){
    for(i=strt;i<=end;i++)
    {
        document.write("<br>"+i);
    }
}
var start=+prompt("Enter Starting Number");
var end=+prompt("Enter Ending Number");
counting(start,end);

//Task 08
function calculateHypothesis(b,p){
    function calculateSquare(num){
        return num**2;
    }
    b=calculateSquare(b);
    p=calculateSquare(p);
    h=Math.sqrt(b+p);
    alert("Hypothesis of right angle triangle is "+h);
}

calculateHypothesis(4,6);

//Task 09
function area(w,h){
    var a=w*h;
    alert(a);
}
//(i)
area(5,7);
//(ii)
var width=20;
var height=40;
area(width,height);

//Task 10
function palindrome(w)
{
    w=w.toLowerCase();
    var reverse="";
    for(i=w.length-1;i>=0;i--){
        reverse+=w[i];
    }
    if(w==reverse){
        alert("The entered word is palindrome");
    }
    else{
        alert("The entered word is not a palindrome");
    }
}
var word=prompt("Enter Word");
palindrome(word);

//Task 11
function upperWords(s){
    var arr=s.split(" ");
    for(i=0;i<arr.length;i++){
      var spl=arr[i].split("");
      spl[0]=spl[0].toUpperCase();
      arr[i]=spl.join("");
    }
    s=arr.join(" ");
    document.write(s);
}
var sentense= prompt("Enter a sentense");
upperWords(sentense);

//Task 12
function longestWords(s){
    var arr=s.split(" ");
    var longestWord;
    var longest=0;
    var count=0;
    for(i=0;i<arr.length;i++){
        var spl=arr[i].split("");
        count=spl.length;
        if(count>longest){
            longestWord=arr[i];
            longest=count;
        }
    }
    document.write("Input String: "+s);
    document.write("<br>Longest Word in the String is: "+longestWord);  
}

var sentense=prompt("Enter a sentense");
longestWords(sentense);

//Task 13
function charCount(str,char){
    var arr=str.toLowerCase().split("");
    char=char.toLowerCase();
    var count=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]===char){
            count+=1;
        }
    }
    document.write("Character '"+char +"' appears "+count+ " times in the sentence '"+str+"'");
}
var s=prompt("Enter a sentence");
var ch=prompt("Enter a character");
charCount(s,ch);

//Task 14
function calcCirumference(r){
    var c=2*Math.PI*r;
    document.write("The Circumference is "+c);
}

function calcArea(r){
    var a=Math.PI*(r**2);
    document.write("The are is "+a);
}

var radius=+prompt("Enter radius of circle");
calcCirumference(radius);
calcArea(radius);