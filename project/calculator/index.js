// all variables
let num = "";
let dot = "."
let add = "+"
let sub = "-"
let div = "/"
let mul = "*"
let numheight=""
let numweight=""
let outputconvert=""
//this function for calculator
function calculator()
{
    num=""
    document.getElementById("enterconvert").innerHTML=""
    document.getElementById("convertoutput").innerHTML=""
    let you=
    `<div class="output">`+
        `<div class="displaay">`+
            `Enter any number : `+
        `</div>`+
    `</div>`
document.getElementById("titles").innerHTML=you;
document.getElementById("enterweight").innerHTML="";
numdileforcalci()
}
//this function for calculator numdiler
function numdileforcalci()
{
    let numdileforcalc=
    ` <div class="num">`+
    `<button class="item" onclick="number(1)">1</button>`+
    `<button class="item" onclick="number(2)">2</button>`+
    `<button class="item" onclick="number(3)">3</button>`+
    `<button class="item" onclick="number(add)">+</button>`+
    `<button class="item" onclick="number(4)">4</button>`+
    `<button class="item" onclick="number(5)">5</button>`+
    `<button class="item" onclick="number(6)">6</button>`+
    `<button class="item" onclick="number(sub)">-</button>`+
    `<button class="item" onclick="number(7)">7</button>`+
    `<button class="item" onclick="number(8)">8</button>`+
    `<button class="item" onclick="number(9)">9</button>`+
    `<button class="item" onclick="number(mul)">*</button>`+
    `<button class="item" onclick="ac()">AC</button>`+
    `<button class="item" onclick="number(0)">0</button>`+
    `<button class="item" onclick="number(dot)">.</button>`+
    `<button class="item" onclick="number(div)">/</button>`+
    `<button class="item" onclick="number('cancel')">Cancel</button>`+
    `<button class="item" onclick="enter()">Enter</button>`+
    `</div>`
    
    document.getElementById("numdile").innerHTML=numdileforcalc
    let your=
    `<div class="output">`+
        `<div class="displaay">`+
            `The output is :`+
        `</div>`+
    `</div>`
    document.getElementById("options").innerHTML=your
    document.getElementById("units").innerHTML=""
}
// numbiler call this function for enter number
function number(a)
{ 
    let n = a.toString();

    num += n
    if (n==="cancel" && num.length==6)
    {
        num = "";

    }
    else if  (n === "cancel" ){
        let len = num.length;
        num = num.slice(0,len-7);
        
    }
    
    let youarray=
    `<div class="output">`+
        `<div class="displaay">`+
            `Enter any number : ${num}`+
        `</div>`+
    `</div>`
    console.log(num.length)
    document.getElementById("titles").innerHTML=youarray;
    
}
//numbiler call this function for all clear
function ac()
{
    num=""
    calculator()
}
//numbiler call this function for enter button
function enter()
{
    var result = eval(num);
    let your=
    `<div class="output">`+
        `<div class="displaay">`+
            `The output is :${result}`+
        `</div>`+
    `</div>`
    document.getElementById("options").innerHTML=your
}
//this function for bmi
function bmi()
{
    document.getElementById("enterconvert").innerHTML=""
    document.getElementById("convertoutput").innerHTML=""
    document.getElementById("units").innerHTML=""
    document.getElementById("options").innerHTML=""
    let bminum=
    ` <div class="numbmi">`+
    `<button class="item" onclick="height(1)">1</button>`+
    `<button class="item" onclick="height(2)">2</button>`+
    `<button class="item" onclick="height(3)">3</button>`+
    `<button class="item" onclick="height(4)">4</button>`+
    `<button class="item" onclick="height(5)">5</button>`+
    `<button class="item" onclick="height(6)">6</button>`+
    `<button class="item" onclick="height(7)">7</button>`+
    `<button class="item" onclick="height(8)">8</button>`+
    `<button class="item" onclick="height(9)">9</button>`+
    `<button class="item" onclick="acbm('a')">AC</button>`+
    `<button class="item" onclick="height(0)">0</button>`+
    `<button class="item" onclick="height(dot)">.</button>`+
    `<button class="item" onclick="height('cancel')">Cancel</button>`+
    `<button class="item" onclick="bmienter()">Enter</button>`+
    `</div>`
    
    document.getElementById("numdile").innerHTML=bminum
    let youarray=
    `<div class="output">`+
        `<div class="displaay">`+
            ` Enter your height in cm :`+
        `</div>`+
    `</div>`
    console.log("function is running")
    document.getElementById("titles").innerHTML=youarray;
   
}
function height(b)
{
   let numarra = b.toString();
    numheight += numarra
    if (numarra==="cancel" && numheight.length==6)
    {
        numheight = "";
    }
    else if  (numarra === "cancel" ){
        let lent = numheight.length;
        numheight = numheight.slice(0,lent-7);
        
    }
    console.log(numarra);
    let youarray=
    `<div class="output">`+
        `<div class="displaay">`+
            ` Enter your height in cm :${numheight}`+
        `</div>`+
    `</div>`
    document.getElementById("titles").innerHTML=youarray;
       
}
function weight(c=1)
{
    
   let numarraes = c.toString();
    numweight += numarraes
    if (numarraes==="cancel" && numweight.length==6)
    {
        numweight = "";
    }
    else if  (numarraes === "cancel" ){
        let lent = numweight.length;
        numweight = numweight.slice(0,lent-7);
        
    }
    // console.log(numarra);
    let youarray=
    `<div class="output">`+
        `<div class="displaay">`+
            `Enter your weight in kg :${numweight}`+
        `</div>`+
    `</div>`
    document.getElementById("enterweight").innerHTML=youarray;
       
}
// bmi enter function
function bmienter()
{
    let youarray=
    `<div class="output">`+
        `<div class="displaay">`+
            `Enter your weight in kg :`+
        `</div>`+
    `</div>`
    document.getElementById("enterweight").innerHTML=youarray;

    console.log("weight is running")
    let bminum=
    ` <div class="numbmi">`+
    `<button class="item" onclick="weight(1)">1</button>`+
    `<button class="item" onclick="weight(2)">2</button>`+
    `<button class="item" onclick="weight(3)">3</button>`+
    `<button class="item" onclick="weight(4)">4</button>`+
    `<button class="item" onclick="weight(5)">5</button>`+
    `<button class="item" onclick="weight(6)">6</button>`+
    `<button class="item" onclick="weight(7)">7</button>`+
    `<button class="item" onclick="weight(8)">8</button>`+
    `<button class="item" onclick="weight(9)">9</button>`+
    `<button class="item" onclick="acbmi()">AC</button>`+
    `<button class="item" onclick="weight(0)">0</button>`+
    `<button class="item" onclick="weight(dot)">.</button>`+
    `<button class="item" onclick="weight('cancel')">Cancel</button>`+
    `<button class="item" onclick="outputbmi()">Enter</button>`+
    `</div>`
    document.getElementById("numdile").innerHTML=bminum
}
// output of bmi
function outputbmi()
{
    let bmiheight=parseInt(numheight)
    console.log(bmiheight)
    let bmiweigth=parseInt(numweight)
    console.log(bmiweigth)
    let bmicalculation=bmiweigth/bmiheight
    console.log(bmicalculation)
    bmicalculation=bmicalculation/bmiheight
    console.log(bmicalculation)
    bmicalculation=bmicalculation*10000
    bmicalculation=bmicalculation.toFixed(2)
    let bmistatus
    if (bmicalculation<=18.49)
    {
        bmistatus="Underweight"
    }
    else if(bmicalculation>=18.50 && bmicalculation<=24.99)
    {
        bmistatus="Normal"
    }
    else if(bmicalculation>=25.00 && bmicalculation<=39.99)
    {
        bmistatus="Overweight"
    }
    else
    {
        bmistatus="Obese"
    }
    let your=
    `<div class="output">`+
        `<div class="displaay">`+
            `The output is : ${bmicalculation}(${bmistatus})`+
        `</div>`+
    `</div>`
    document.getElementById("units").innerHTML=your
}
function acbmi()
{
        numheight=""
        numweight=""
        bmi()
        document.getElementById("enterweight").innerHTML=""
}
// convert button call this function
function convertnumber()
{
    let convertnum=
    `<b class="title"> Unit converter</b>`
    document.getElementById("titles").innerHTML=convertnum
    document.getElementById("units").innerHTML=""
    document.getElementById("enterweight").innerHTML=""
    document.getElementById("numdile").innerHTML=""
    num=""
    options()
}
function options()
{
    let optionss=
    `<div>`+
    `<button class="optionsitem_to_convert" onclick="currency()">Currency</button>`+
    `<button class="optionsitem_to_convert" onclick="length()">Length</button>`+
    `<button class="optionsitem_to_convert" onclick="area()">Area</button>`+
    `<button class="optionsitem_to_convert" onclick="weigth()">Weight</button>`+
    `</div>`
    document.getElementById("options").innerHTML=optionss
}
function numdile()
{
    let selectElement = document.getElementById("currencyselect1");
    var selectedIndex = selectElement.selectedIndex;
    if (selectedIndex !== -1) 
    {
            var selectedOption = selectElement.options[selectedIndex];
            var selectedValue = selectedOption.value;
    }
    
    let youarray=
    `<div class="output">`+
        `<div class="displaay">`+
            ` Enter ${selectedValue}:`+
        `</div>`+
    `</div>`
    document.getElementById("enterconvert").innerHTML=youarray;
    let numdil=
    ` <div class="numbmi">`+
    `<button class="item" onclick="convertnumberdiler(1)">1</button>`+
    `<button class="item" onclick="convertnumberdiler(2)">2</button>`+
    `<button class="item" onclick="convertnumberdiler(3)">3</button>`+
    `<button class="item" onclick="convertnumberdiler(4)">4</button>`+
    `<button class="item" onclick="convertnumberdiler(5)">5</button>`+
    `<button class="item" onclick="convertnumberdiler(6)">6</button>`+
    `<button class="item" onclick="convertnumberdiler(7)">7</button>`+
    `<button class="item" onclick="convertnumberdiler(8)">8</button>`+
    `<button class="item" onclick="convertnumberdiler(9)">9</button>`+
    `<button class="item" onclick="acconvert()">AC</button>`+
    `<button class="item" onclick="convertnumberdiler(0)">0</button>`+
    `<button class="item" onclick="convertnumberdiler(dot)">.</button>`+
    `<button class="item" onclick="convertnumberdiler('cancel')">Cancel</button>`+
    `<button class="item" onclick="convertenter()">Enter</button>`+
    `</div>`
    document.getElementById("numdile").innerHTML=numdil
}
function acconvert()
{
    outputconvert=""
    convertnumber();
    document.getElementById("enterconvert").innerHTML=""
    document.getElementById("convertoutput").innerHTML=""
}
function convertnumberdiler(a=1)
{ 
    let n = a.toString();

    num += n
    let selectElement = document.getElementById("currencyselect1");
    var selectedIndex = selectElement.selectedIndex;
    if (selectedIndex !== -1) 
    {
            var selectedOption = selectElement.options[selectedIndex];
            var selectedValue = selectedOption.value;
    }
    if (n==="cancel" && num.length==6)
    {
        num = "";

    }
    else if  (n === "cancel" ){
        let len = num.length;
        num = num.slice(0,len-7);
        
    }
    let youarray=
    `<div class="output">`+
        `<div class="displaay">`+
            `Enter ${selectedValue}:${num}`+
        `</div>`+
    `</div>`
    document.getElementById("enterconvert").innerHTML=youarray;
    
}
function convertenter()
{
    let selectElement = document.getElementById("currencyselect1");
    var selectedIndex = selectElement.selectedIndex;
    if (selectedIndex !== -1) 
    {
            var selectedOption = selectElement.options[selectedIndex];
            var selectedValue = selectedOption.value;
    }
    let selectElement2 = document.getElementById("currencyselect2");
    var selectedIndex2 = selectElement2.selectedIndex;
    if (selectedIndex2 !== -1) 
    {
            var selectedOption2 = selectElement2.options[selectedIndex2];
            var selectedValue2 = selectedOption2.value;
    }
  selectedValue=selectedValue.toString()
  console.log(typeof selectedValue)
  // conversion
   if(selectedValue==selectedValue2)
    {
      outputconvert=num
    }
    else if(selectedValue=="IndianRupee" && selectedValue2=="USDoller")
    {
        outputconvert=num*0.012
    }
    else if(selectedValue=="USDoller" && selectedValue2=="IndianRupee")
    {
        outputconvert=num*83.12
    }
    else if(selectedValue=="Centimeter" && selectedValue2=="Metre")
    {
        outputconvert=num*0.01
    }
    else if(selectedValue=="Metre" && selectedValue2=="Centimeter")
    {
        outputconvert=num*100
    }
    else if(selectedValue=="Squaremeter" && selectedValue2=="Squarecentimeter")
    {
        outputconvert=num*10000
    }
    else if(selectedValue=="Squarecentimeter" && selectedValue2=="Squaremeter")
    {
        outputconvert=num*0.0001
    }
    else if(selectedValue=="Kilogram" && selectedValue2=="pound")
    {
        outputconvert=num*2.204
    }
    else if(selectedValue=="pound" && selectedValue2=="Kilogram")
    {
        outputconvert=num*0.453
    }
    else
    {
        console.log(selectedValue,selectedValue2,num)
    }
    console.log(selectedValue,selectedValue2,num)
    outputconvert=parseFloat(outputconvert)
    console.log( outputconvert)
    let youarray=
    `<div class="output">`+
        `<div class="displaay">`+
            `  ${selectedValue2} :${outputconvert}`+
            
        `</div>`+
    `</div>`
    document.getElementById("convertoutput").innerHTML=youarray;
}
function currency()
{
    num=""
    
    document.getElementById("convertoutput").innerHTML=""
    let currencyselect=
    `<select name="mycar" class="optionsitem_to_convert" id="currencyselect1">`+
        `<option value="IndianRupee">Indian Rupee INR</option>`+
        `<option value="USDoller" selected>US Doller</option>`+
    `</select>`+
    `<b> TO</b>`+
    `<select name="mycar" class="optionsitem_to_convert" id="currencyselect2">`+
        `<option value="IndianRupee" selected>Indian Rupee INR</option>`+
        `<option value="USDoller">US Doller</option>`+
    `</select>`+
    `<button class="enterbutton" onclick="numdile()">Enter</button>`
        
    document.getElementById("units").innerHTML=currencyselect
}
function length()
{
    num=""
    document.getElementById("convertoutput").innerHTML=""
    let currencyselect=
    `<select name="mycar" class="optionsitem_to_convert" id="currencyselect1">`+
        `<option value="Centimeter">Centimeter (cm)</option>`+
        `<option value="Metre" selected>Metre (m)</option>`+
    `</select>`+
    `<b> TO</b>`+
    `<select name="mycar" class="optionsitem_to_convert" id="currencyselect2">`+
        `<option value="Centimeter" selected>Centimeter (cm)</option>`+
        `<option value="Metre">Metre (m)</option>`+
    `</select>`+
    `<button class="enterbutton" onclick="numdile()">Enter</button>`
        
    document.getElementById("units").innerHTML=currencyselect
}
function area()
{
    num=""
    document.getElementById("convertoutput").innerHTML=""
    let currencyselect=
    `<select name="mycar" class="optionsitem_to_convert" id="currencyselect1">`+
        `<option value="Squaremeter">Square meter </option>`+
        `<option value="Squarecentimeter" selected>Square centimeter </option>`+
    `</select>`+
    `<b> TO</b>`+
    `<select name="mycar" class="optionsitem_to_convert" id="currencyselect2">`+
        `<option value="Squaremeter" selected>Square meter</option>`+
        `<option value="Squarecentimeter">Square centimeter</option>`+
    `</select>`+
    `<button class="enterbutton" onclick="numdile()">Enter</button>`
        
    document.getElementById("units").innerHTML=currencyselect
}
function weigth()
{
    num=""
    document.getElementById("convertoutput").innerHTML=""
    let currencyselect=
    `<select name="mycar" class="optionsitem_to_convert" id="currencyselect1">`+
        `<option value="Kilogram">Kilogram (kg) </option>`+
        `<option value="pound" selected>pound (lb) </option>`+
    `</select>`+
    `<b> TO</b>`+
    `<select name="mycar" class="optionsitem_to_convert" id="currencyselect2">`+
        `<option value="Kilogram" selected>Kilogram (kg)</option>`+
        `<option value="pound">pound (lb)</option>`+
    `</select>`+
    `<button class="enterbutton" onclick="numdile()">Enter</button>`
        
    document.getElementById("units").innerHTML=currencyselect
}