// bai 1-ss16:
// Viết chương trình tạo hàm tính tổng 2 số
// function total(a, b) {
//     let sum = a + b;
//     console.log(`tong cua 2 so ${a} va ${b} la ${sum}`);
// }
// total(3, 5);
// total(100, 200);



// Bài 2-ss16: Viết chương trình tạo hàm tính diện tích và chu vi hình tròn
//  chuc nang tinh dien tich va chu vi
//  ten ham: abc
// tham so dau vao: 1 tham so ban kinh
//  gia tri tra ve
// function abc(bankinh) {
//     let dientich = Math.PI * bankinh * bankinh;
//     let chuvi = 2 * Math.PI * bankinh;
//     return [dientich, chuvi]; // tra ve gia tri
// }
// // kiem tra ham hoat dong tot khong
// console.log(abc(5));
// console.log(abc(15));
// console.log(abc(20));
// console.log(abc(100));



// Bài 3-ss16: Viết chương trình tạo hàm kiểm tra xem ký tự nhập vào có phải ký tự số hay không?
// function checkIn(string) {
//     let n = parseInt(string);
//     // if (Object.is(n, NaN)) {   // cach 1
//     //     return false
//     // } else {
//     //     return true
//     // }
//     return !Object.is(n, NaN)     // cach 2
// }
// console.log(checkIn("3"));
// console.log(checkIn("a"));



// bai 4-ss16:
// Viết chương trình cho người dùng nhập vào một số, kiểm tra xem số đưa vào có phải nguyên dương không ?
// Nếu đung trả vè true, sai trả về false
// cach 1:
// function checkIn(number) {
//     let n = +prompt("nhap so");
//     if (n > 0) {
//         return true;
//     }
//     return false;
// }
// console.log(checkIn("3"));
// console.log(checkIn("-1"));

// cach 2:
// function checkIn(number) {
//     return number > 0;
// }
// console.log(checkIn("9"));



// bai 5 - ss16:
// Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ 2 số nguyên đó。
// let a = 1;
// let b = 2;
// function doiSo(a, b) {
//     let c = a;
//     a = b;
//     b = c;
//     return [a, b];
// }
// console.log([b, a]);