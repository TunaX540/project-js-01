// funtion Ep.1
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// function มี 4 ประเภทใหญ่
// 1. no parameter, no return
function Func1() {
    console.log('Heelo..');
    console.log('Hii...');
}
Func1()
// 2. have parameter, no return
function FuncB(data1, data2, data3) {
    console.log(data1);
    console.log(data2 + data3);
}

FuncB('Nope', 526.1, 50)
