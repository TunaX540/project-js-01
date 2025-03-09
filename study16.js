// funtion Ep.5
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// 2. arrow function การประกาศฟังก์ชันโดยใช้ => (fat arrow)

var aa = () => {
    console.log('Hello');
}

let bb = (data) => {
    console.log('Hey', data);
}

let bb11 = data => console.log('Hey', data);
const cc = () => {
    console.log('Hi');
}

const ee = (n1, n2) => n1 * n2 //ปีกกา+return

console.log(ee(10, 20));

let dd = cc

aa()
bb('Ay')
bb11('we')
cc()
dd()