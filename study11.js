// control statement (loop/iteration/repetition) Ep.3
// คำสั่งควบคุมในกลุ่มต้องมีการพิสูจน์ตรวจสอบก่อนทำงานใดๆ
//------------------------------
// forEach
let aa = [10, 20, 30, 40, 50]
console.log(aa[0] * 10);
console.log(aa[1] * 10);
console.log(aa[2] * 10);
console.log(aa[3] * 10);
console.log(aa[4] * 10);
console.log('------------------------');
aa.forEach((item) => {
    console.log(item * 10);
});
console.log('------------------------');
let bb = ['สมชาย', 'สมหญิง', 'สมหมาย']
console.log(`สวัสดี ${bb[0]}`);
console.log(`สวัสดี ${bb[1]}`);
console.log(`สวัสดี ${bb[2]}`);
console.log('------------------------');
bb.forEach((item) => {
    console.log(`สวัสดี ${item}`);
})
console.log('------------------------');
// for..in
let cc = {
    fullname: 'สมชาย ใจดี',
    age: 20,
    score: [10, 20, 30],
    address: {
        no: 8,
        rd: 'มาเจริญ',
        province: 'กรุงเทพ'
    }
}
console.log(cc.fullname);
console.log(cc.age);
console.log(cc.score[2]);
console.log(cc.address.rd);
console.log('------------------------');
for (keyname in cc) {
    console.log(cc[keyname]);
}

console.log('------------------------');

// for..of
let dd = ['สมชาย', 'สมหญิง', 'สมหมาย']
console.log(dd[0]);
console.log(dd[1]);
console.log(dd[2]);
console.log('------------------------');
for (item of dd) {
    console.log(`สวัสดี ${item}`);
}