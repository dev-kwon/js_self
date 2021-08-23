/*
    여기는 주석부분이다.

    *** js Type ***
    1. 숫자(number)
    2. 문자열(string)
    3. 불리언(boolean)
    4. 심볼(symbol) / ECMAScript 6부터 제공됨.
    5. undefined
    6. 객체(object)

    1. basic for loop
    2. for / in loop -> iteration for index
    3. for / of loop -> iteration for value
*/
function alertDialogBox(){
    alert("확인을 누를 때까지 다른 작업을 할 수 없어요!")
}

function forLoop(){
    for(var i=1; i<10; i++){
        document.write(i + "<br>");
    }
}

function forInLoop(){
    var arr = [3,4,5];
    for (var i in arr){
        document.write(i + " ");
        document.write(arr[i] + "<br>")
    }
}

function forOfLoop(){
    var arr = [3,4,5, "t"];
    for (var value of arr){
        document.write(value + " ");
    }
}

// forLoop()
// forInLoop()
forOfLoop()

