// data type ชนิดข้อมูล
// คือ ตัวข้อมูล (literal) ที่เก็บไว้ในตัวแปร (variable) หรือที่ทำไปใช้งาน
//------------------------------
// string
let aa = 'sss'
let bb = 'dsd'
let cc = 'sdsd'
console.log(aa, bb, cc);

// number
let dd = 657
let ee = 52.4
console.log(dd, ee)
// boolean
let ff = true
let gg = false
console.log(ff, gg);
// object
let hh = {
    //key : value
    name: 'Som',
    age: 30,
    major: 'DTI',
    uni: `SAU ${50 * 4}`
}
console.log(hh);
console.log(`ชื่อ : ${hh.name}  อายุ ${hh.age}`);
// array
let ii = [10, 20, 30, 40]
console.log(ii);
console.log(ii[1]);
console.log(ii[0] * ii[2]);


// undefined
let jj
let kk = undefined
console.log(jj);
console.log(kk);

// null
let ll = null
console.log(ll);

// type checking การตรวจสอบชนิดข้อมูล
console.log(typeof gg);