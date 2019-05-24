function capitalize(str) {
	var newString =str[0].toUpperCase();
  for(i=1; i<str.length; i++ ){
  	if(str[i] == " "){
    	i++;
    	newString = newString + " " + str[i].toUpperCase();
    }
    else{
    	newString += str[i];
    }
  }
  return newString;
}
//console.log(capitalize("phan van su")); ->> Phan Van Su


function toNextChar(str) {
	// Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmpp"
  // Tham số:
  // - String: chuỗi nhập vào ban đầu.
  var newStr = "";
  for(var i = 0; i < str.length; i++){
  	newStr += String.fromCharCode(( str[i].charCodeAt() + 1 ));
	}
 	return newStr;
}

function reverse(x){
    var newStr ="";
    for(i=str.length;i>=0;i--){
       // console.log(str[i]);
        var tam = str[i];
        console.log(typeof(tam));
        newStr.push(tam);
    }
    return newStr;
}
//console.log(reverse("abcd"));
/*
  	- Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
    - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
    - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  */
function findMaxDiff(arr) {
  var lengthArr = arr.length;
  var findMax = function(){
        var max = 0;
        var i = 0;
        for(i; i < lengthArr; i++){
            /*if(Math.abs(arr[i]-arr[i+1])> max){
                max = Math.abs(arr[i]-arr[i+1]);
            }else
                continue;*/
            max = (Math.abs(arr[i]-arr[i+1]) > max) ? Math.abs(arr[i]-arr[i+1]) : max; 
        }
        return max;
    }
    var resufl = (lengthArr == 1 || lengthArr == 0)  ? 0 : findMax();
    return resufl;
}
//console.log( findMaxDiff([1,2,4,5,6]) );

function x(arr){
    var max = 0;
    var i = 0;
    var lengthArr = arr.length;
    for(i; i < lengthArr; i++){
        //max = (Math.abs(a[i]-a[i+1]) > max) ? Math.abs(a[i]-a[i+1]) : max; 
        if(Math.abs(arr[i]-arr[i+1])> max){
            max = Math.abs(arr[i]-arr[i+1]);
        }else
            continue;
    }
    return max;
}
//console.log(x([1,24,-10]));
// excices 5
function equal_pt(str){ 
    var changeToArray = str;
    var count_p = 0;
    var count_t = 0;
    for(var i = 0; i < changeToArray.length; i++ ){
        if(changeToArray[i] == "p" ){
            count_p += 1;
        }
        if(changeToArray[i] == "t"){
            count_t +=1;
        }
        else{
            continue;
        }
    }
    if(count_p == count_t){
        return true;
    }else{
        return false;
    }
}
//console.log(equal_pt("bpppttt pptt"));
function first(array, n) {
    // viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền
    // vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng).
    // Nếu n <= 0 thì trả về mảng trống.
    // Tham số:
    //	- array: mảng gốc
    //	- n: số phần tử trả về
    
    if(n == null){
        return array[0];
    }
    if(n>0){
        if(	n > array.length - 1){
            return array;
        }
      if( n <= array.length - 1){
          var newArr = [];
        for(var i = 0; i < n ; i++){
           newArr.push(array[i]);
        }
        return newArr;
      }
    }else{
        return [];
     }
  }
 // console.log(first([7, 9,7,7],3));

 //Maximum possible sum of some of its k consecutive numbers
 // (numbers that follow each other in order.) of a given array of positive integers
 function maxOfSumChain(arr,k){
    var tam = 0;
    var max = 0;
    for(var i = 0; i < arr.length; i++){
     for(var j = i+1; j < arr.length; j++){
       if(arr[j]>arr[i]){
        tam = arr[i];
        arr[i] = arr[j];
        arr[j] = tam;
     }
   }
 }
 for(i = 0; i < k; i++){
     max += arr[i];
 }
 return max;
}
//console.log(maxOfSumChain([1,3,2,6,2],3)); //11
function maxOfSumChain2(arr,k){
    var tam = [];
    var max = 0;
    var j;
    for(var i = 0; i < arr.length - k + 1; i++){
        var sum = 0;
        for(j = i; j < i+k; j++){
            sum += arr[j];
        }
        tam.push(sum);
        console.log(tam);
    }
    for(var i = 0; i < tam.length; i++){
        if(max < tam[i]){
            max = tam[i];
        }
        //console.log(tam);
    }
    return max;
}
//console.log(maxOfSumChain2([1,3,2,6,2],3));

/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/
/*function findMostFrequent(arr) {
    console.log(ob[k.toString]);
    var oNumber = {};
    for(var i = 0; i < arr.length; i++){
        for( var key in oNumber){
            if(key === arr[i].toSting){
                arr[key] += 1;
            }
            if(key !== arr[i].toSting){
                var strKey = arr[i].toSting;
                oNumber[strKey] = arr[i];
            }
        }
    }
    //console.log(oNumber);
    var max = 0;
    for(var key in oNumber){
        if(oNumber[key] > max){
            max = oNumber[key];
        }
//console.log(key);
    }
    //console.log(max);
    var mostFrequent = [];

    //return mostFrequent;
}
console.log(findMostFrequent([0,1,2,3,4,1,2,2]));*/
function findMostFrequent(arr) {
    var newArr = arr.reduce(function(Obj, item){
        if(item in Obj){
          Obj[item] ++;
      }else{
          Obj[item] = 1;
      }
      //console.log(Obj);
      return Obj;
    },{});
    
    var max = 0;
    for(var key in newArr){
        if(newArr[key] > max){
            max = newArr[key];
        }else{
            continue;
        }
    }
    var result = [];
    for(var key in newArr){
        if(newArr[key] === max){
            result.push(parseInt(key));
        }else{
            continue;
        }
    }
    return result;
  }
 //console.log(findMostFrequent([ 16, 16, 23, 10, 7, 32, 36]));
 //console.log(findMostFrequent([ 0, 16, 23, 10, 7, 32, 36, 5, 38, 7, 31, 13, 23, 16, 14, 26, 13, 37, 36, 26 ]));

/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?
Input: 2 chuỗi String
Output: True hoặc False
ví dụ:
Input: abc cba
Output: True
Input: abx abb
Output: False
*/
function rearrangeChar(str1, str2) {
    var str3 ="";
    if(str1.length != str2.length){
        return false;
     }else{
        for(var i = 0; i < str1.length; i++){
            for(var j = 0; j < str2.length; j++){
                if(str2[j] === str1[i]){
                    str3 += str2[j];
                    break;
                }
            }
        }
        if(str1 === str3){
            return true;
        }else{
            return false;
        }
     }
}
//console.log(rearrangeChar("abua","acdvbua"));

// Count the occurrences of each element inside an array using reduce
function countOccurrences(arr) {
    return arr.reduce((a, b) => {
      a[b] = arr.filter(element => element === b).length;
      return a;
    }, {})
  }
      //countOccurrences(['a', 'b', 'c', 'b', 'a']);

  ////////////////////////////////////////////
  function countOccurrences(arr) {
    return arr.reduce(function(a, b){
      //console.log(a,b);
      a[b] = arr.filter(function(element){
        return element === b;
      }).length
      console.log(a,b);
      return a;
    }, {})
  }
 //     countOccurrences(['a', 'b', 'c', 'b', 'a']);
  
  //https://repl.it/@suphan/CuteActualChords 


  // concert decimal to binary 
function convertToBinary(number){
    var bin = (+number).toString(2);
    console.log(bin)
    return bin;
}
// convertToBinary(2);

///

function led(arr1,arr2){
    var count = 0;
    /*var newArr = arr1.reduce(function(Obj, item){
        Obj[item] = 'turn off';
        return Obj;
    },{});*/
    var objOff = arr1.reduce(function(Obj, item){
        Obj[item] = 'Off';
        return Obj;
    },{});
    var objOn = {};
    //var objOff = {};
    var objLigth = {};
    function main(){
        for(var i = 1; i < arr2.length; i++ ){
            if(arr1[i] == arr2[i]){
                if(arr1[i-1] == arr2[i-1] && objOff[(i).toString()] == 'Light'){
                    count ++;
                    objLigth[i+1] = "Light";
                    objOn[arr2[i].toString()] = 'On';
                    Light(i);
                }else{
                    objOn[arr2[i].toString()] = 'On';
                }
            }
            else{
                objOn[arr2[i].toString()] = 'On';
            }
        }
    }
    function Light(i){
        for(var j = i + 1; j > 0; j--){
            objLigth[j] = 'Light';
            objOff[j.toString()] = 'Light';
        }
    }
    function onToLight(n){
        for(var j = 0; j = n; j++){
            objLigth[j] = 'Light';
            objOff[j.toString()] = 'Light';
        }
    }
    if(arr2[0] == 1){
        Light(0);
        count ++;
        main();
    }else{
        var newArr = [0];
       for(var i = 0; i < arr2.length; i++){
           if(arr2[i]==1){
                count ++
                arr2[0]=1;
                Light(0);
                main();
                break;
           }
       }
       main();
    }
    console.log("Led off ", objOff);
    console.log("Led on ", objOn);
    console.log("Led light", objLigth);
    console.log(count)
}
var tt = [1,2,3,4,5];
//var ss = (tt == tt)
//console.log(ss);
//led([1,2,3,4,5,6],[2,1,3,4]);

/// test change2
function connexion(){
    var username = prompt("Username :", "");
    var password = prompt("Password :", "");
    var TheLists = ["GOD:HIDDEN"];
    for (i = 0; i < TheLists.length; i++)
    {
        if (TheLists[i].indexOf(username) == 0)
        {
            var TheSplit = TheLists[i].split(":");
            var TheUsername = TheSplit[0];
            var ThePassword = TheSplit[1];
            if (username == TheUsername && password == ThePassword)
            {
                console.log("Vous pouvez utiliser ce mot de passe pour valider ce challenge (en majuscules) / You can use this password to validate this challenge (uppercase)");
            }
        }
        else
        {
            console.log("Nope, you're a naughty hacker.");
        }
    }
}
//connexion();
// Count the occurrences of each element inside an array using reduce
function countOccurrences(arr) {
    return arr.reduce(function(a, b){
      console.log(a,b);
      a[b] = arr.filter(function(element){
        return element === b;
      }).length;
      console.log(a,b);
      return a;
    }, {})
    //console.log(a[b]);
  }
  
  countOccurrences(['a', 'b', 'c', 'b', 'a']);
  // { 
  //   a: 2, 
  //   b: 2, 
  //   c: 1 
  // }