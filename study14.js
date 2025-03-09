// funtion Ep.3
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// function for default parameter
function Func5(xx, yy, zz = 100) {
    console.log(xx);
    console.log(yy);
    console.log(zz);
}
Func5(123, 456, 789)
Func5(12, 23.5)

// function for return mulitple value
// return array value

function Func6() {
    let aa = [10, 20, 30]
    return aa
}
// return object value
function Func7() {
    let bb = {
        name: 'Mine',
        age: 18,
    }
    return bb
}
console.log('...............................');
// use destruction to get value from object and array
let [n1, n2, n3] = Func6()
console.log(n1, n2, n3);
let { name, age } = Func7()
console.log(name, age);