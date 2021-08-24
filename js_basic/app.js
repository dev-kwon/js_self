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
// forOfLoop()


// Local Variable & global variable
// let과 var의 차이점은 단순 재할당 재선언 뿐이 아닌 전역변수와 아니냐의 차이도 존재한다.
// 즉, let은 전역변수가 아니므로 window 객체에 담기지 않는다.

var num = 10;

function globalNum(){
    var num = 20;
    document.write("함수 내부에서 변수 num 값은 " + num + "입니다. <br>");
    document.write("함수 내부에서 전역변수 num의 값은 " + window.num + " 입니다. <br>");
}
globalNum();
document.write("함수 외부에서 num의 값은 " + num + "입니다.");