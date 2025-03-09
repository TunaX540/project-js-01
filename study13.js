// funtion Ep.2
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
//3. no parameter, has return
function FuncC() {
    console.log('Woo.')
    return 'Wow wow wow'
}
//4. have parameter, has return

function FuncD(n1, n2) {
    return n1 + n2
}
console.log(FuncD(10, 20))
let xx = FuncC()
console.log(`${xx} ^0^`);