// control statement (condition/selection) Ep.2
// คำสั่งควบคุมในกลุ่มต้องมีการพิสูจน์ตรวจสอบก่อนทำงานใดๆ
//------------------------------
// 3. if-else-if
let score = 55
if (score >= 80) {
    console.log('A');
}
else if (score >= 70) {
    console.log('B');
}
else if (score >= 60) {
    console.log('C');
}
else if (score >= 50) {
    console.log('D');
}
else {
    console.log('F');
}

// 4. switch-case

let busno = 80

switch (busno) {
    case 80:
        console.log('วัดศรีนวล');
        break
    case 8:
        console.log('Happyland');
        break
    case 503:
        console.log('สนามหลวง');
        break
    default:
        console.log('ไม่มีข้อมูล');
        break
}