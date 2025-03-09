// funtion Ep.4
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// function expression การประกาศฟังก์ชันโดยใช้ตัวแปร
// 1. anonymous function ฟังก์ชันที่ไม่มีชื่อ
var aa = function () {
    console.log('Hello');
}

let bb = function () {
    console.log('Hey');
}

const cc = function () {
    console.log('Hi');
}
let dd = cc
aa()
bb()
cc()
dd()
