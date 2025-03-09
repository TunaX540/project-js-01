// funtion Ep.5
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// callback function

function Func8(xx, yy, zz) {
    console.log(xx);
    let aa = yy * 10

    zz(aa)
}

function Func9(nn) {
    console.log(nn * 200);
}

Func8(11, 22, Func9)