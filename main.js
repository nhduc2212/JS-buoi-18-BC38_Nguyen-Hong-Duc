var array = [];
// getting and pushing value into the Array
function addValue() {
  var tempValue = document.getElementById("input-num").value * 1;
  for (var i = 0; i < array.length; i++) {
    if (tempValue === array[i]) {
      alert("This number is duplicated, try another ones");
      return;
    }
  }
  array.push(tempValue);
  renderValue();
  console.log[array];
}

//remove value from the Array
function removeValue() {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == document.getElementById("input-num").value) {
      array.splice(i, 1);
      renderValue();
      return;
    }
  }
  alert(
    "There is no such number in the array, please check again in the list provided!"
  );
}

function remodel(id){
  document.getElementById(id).style.margin = "5px";
  document.getElementById(id).style.background = "#aaa";
  document.getElementById(id).style.borderRadius = "4px";
  document.getElementById(id).style.border = "1px solid #bbb";
  document.getElementById(id).style.width = "fit-content";
  document.getElementById(id).style.marginInline = "auto";
  document.getElementById(id).style.padding = "5px";
}

//render Array
function renderValue() {
  document.getElementById("number-array-display").style.padding = "3px";
  document.getElementById("number-array-display").style.marginBottom= "10 px";
  document.getElementById("number-array-display").style.borderRadius = "4px";
  document.getElementById("array-container").innerHTML =
    "Your array is: " + array;
}

//summarize positive numbers
function sumPos() {
  var tempSum = 0;
  document.getElementById("button-1").classList.add("active");
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      tempSum = tempSum + array[i];
    }
  }
  document.getElementById("sum-pos-result").innerHTML =
    "Sum of all positive numbers in the array is " + tempSum;
    remodel("sum-pos-result")
}

//count the positive numbers
function countPos() {
  var posCount = 0;
  document.getElementById("button-2").classList.add("active");
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      posCount++;
    }
  }
  if (posCount === 0) {
    document.getElementById("count-pos-result").innerHTML =
      "There is no positive value in this array";
  } else {
    document.getElementById("count-pos-result").innerHTML =
      "There are " + posCount + " positive number(s)";
      remodel("count-pos-result")
    
  }
}

//find the smallest number
function smallNum() {
  var min = array[0];
  if (array.length === 0) {
    alert("No value to search for");
    return;
  } else {
    document.getElementById("button-3").classList.add("active");
    for (var i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }

    document.getElementById("small-num-result").innerHTML =
      "The smallest number is " + min;
      remodel("small-num-result")
    
  }
}

//find the smallest positive number
function smallPos() {
  var min;
  if (array[0] < 0) {
    min = 0;
  } else {
    min = array[0];
  }
  if (array.length === 0) {
    alert("No value to search for");
    return;
  } else {
    document.getElementById("button-4").classList.add("active");
    for (var i = 0; i < array.length; i++) {
      if (array[i] < min && array[i] > 0) {
        min = array[i];
      }
    }
    document.getElementById("small-pos-result").innerHTML =
      "The smallest positive number is " + min;
      remodel("small-pos-result")
  }
}

//find the last even number
function lastEven() {
  var lastEvenNum;
  var evenCount;
  if (array.length === 0) {
    alert("No value to search for");
    return;
  } else {
    document.getElementById("button-5").classList.add("active");
    if (array[0] % 2 === 1) {
      evenCount = 0;
      lastEvenNum = -1;
    } else {
      evenCount++;
      lastEvenNum = array[0];
    }
    for (var i = 1; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        evenCount++;
        lastEvenNum = array[i];
      }
    }
    if (evenCount === 0 || lastEvenNum === -1) {
      document.getElementById("last-even-result").innerHTML =
        "There is no even number";
      return -1;
    } else {
      document.getElementById("last-even-result").innerHTML =
        "The last even number is " + lastEvenNum;
    }
    remodel("last-even-result")
  }
}


//swap position of 2 numbers
function swapPlace() {
  var firstIndex =
    prompt("Please enter the position of the value you want to swap") * 1 - 1;
  var secondIndex =
    prompt("Please enter the position to where you wish to swap") * 1 - 1;
  if(firstIndex<0||firstIndex>=array.length||secondIndex<0||secondIndex>=array.length){
    alert("The positions you typed in are invalid, please check again!"); return 0}
  else{
    var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
  renderValue();
  alert("Your array is refreshed");
}}

//getting min value and index of the array
function minChecker(array){
  var min = array[0]
  var index = 0;
  for(var i = 0; i<array.length; i++){
      if(min>array[i]){
          min=array[i]
          index = i
      }
  }
  return [min, index]
}

//Sorting array
function sortArray(){
  var tempArray=[]
  var length=array.length
  for(var i = 0; i<length; i++){
var arrayMin=minChecker(array);
tempArray.push(arrayMin[0])
      array.splice(arrayMin[1],1)
  }
    array=array.concat(tempArray)
  console.log(array,tempArray)
  renderValue();
  alert("Your array is refreshed")
;
}

//looking for the first prime number
function firstPrime(){

    for (var i = 0; i < array.length; i++) {
      var notPrimeNumberCount = 0;
      if(array[i]===1||array[i]<=0){
        break
      }
   
    for (var k = 1; k <= array[i]; k++) {
      if (array[i]>1&&array[i] % k === 0) {
        notPrimeNumberCount++;
      }
    }
    if (notPrimeNumberCount === 2) {
        document.getElementById('first-prime-result').innerHTML="The first prime number is " + array[i]; 
      
        remodel("first-prime-result")
    document.getElementById("button-8").classList.add("active")
    return
  }
}
return -1
}

//count the number of integer
function countInte(){
  var inteCount=0;
  for(var i = 0;i<array.length;i++){
    if (Number.isInteger(array[i])){inteCount++}
  }
document.getElementById("count-inte-result").innerHTML="There is "+inteCount+" integer numbers";
remodel("count-inte-result")
document.getElementById("button-9").classList.add("active")
}

//compare the number of Positive and Negative number
function countPosNeg(){
  var posValues = 0;
  var negValues = 0;
  var result=document.getElementById("count-pos-neg-result");
  if(array.length<1){alert("The array must have at least 1 value")}else{
  for (var i=0; i<array.length; i++){
    if(array[i]===0){break}
    else if(array[i]>0){posValues++}
    else (negValues++);
  }
if(posValues>negValues){result.innerHTML="There are more positive number(s) (" + posValues +" number(s)) than negative number(s) (" + negValues +" numbers)."}
else if(posValues<negValues){result.innerHTML="There are more negative number(s) (" + negValues +" number(s)) than positive number(s) (" + posValues +" numbers)."}
else if(posValues===negValues){result.innerHTML="The number of positive number(s) and negative number(s) are equal"};
remodel("count-pos-neg-result")
document.getElementById("button-10").classList.add("active")}
}