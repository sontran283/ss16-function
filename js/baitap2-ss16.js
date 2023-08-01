// Bài 1:
// Viết hàm tính bình phương của một số bất kỳ được đưa vào.Gọi hàm vừa xây dựng được.
// function binhphuong(number) {
//     let bp = number * number;
//     console.log(`binh phuong cua hai so bat ki la: ` + bp);
// }
// binhphuong(10);



// Bài 2:
// Viết hàm tính diện tích, hàm tính chu vi hình tròn.Gọi hàm vừa xây dựng được.
//chuc nang: tinh dien tich va chu vi
//ten ham: xxx
//tham so dau vao: 1 tham so ban kinh
//gia tri tra ve
// function xxx(bankinh1) {
//     let dientich = Math.PI * bankinh1 * bankinh1;
//     return [dientich];
// }
// function yyy(bankinh2) {
//     let chuvi = 2 * Math.PI * bankinh2;
//     return [chuvi];
// }
// console.log("dien tich cua hinh tron la : " + xxx(3));
// console.log("chu vi cua hinh tron la : " + yyy(2));



// Bài 3:
// Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào.Gọi hàm vừa xây dựng được.
// function giaithua(a) {
//     all = 1;
//     for (i = 1; i <= a; i++) {
//         all *= i
//     }
//     return all;
// }
// console.log(giaithua(4));



// Bài 4:
// Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không.
// Nếu là ký tự số hàm trả về true, ngược lại trả về false.
// cach 1:
// function checkIn(number) {
//     return (number <= 0 || number > 0)
// }
// console.log(checkIn("12"));

// cach 2:
// function checkIn(number) {
//     let n = parseInt(number);
//     return !Object.is(n, NaN)
// }
// console.log(checkIn("3"));



// bai 5:
// Viết hàm nhận vào 3 số nguyên bất kỳ,
// trả về số nguyên có giá trị nhỏ nhất.
// function timMin(a, b, c) {
//     const min = a;
//     if (b < min) {
//         min = b;
//     }
//     if (c < min) {
//         min = c;
//     }
//     return min;
// }
// console.log("so nguyen co gia tri nho nhat la: " + timMin(2, 3, 4));



// Bài 6:
// Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương không.
// Nếu là nguyên dương trả về true, ngược lại trả về false.
// cach 1:
// function checkIn(number) {
//     let n = +prompt("hay nhap so bat ki")
//     if (n > 0) {
//         return true;
//     }
//     return false;
// }
// console.log(checkIn("2"));
// console.log(checkIn("-6"));

// cach 2:
// function checkIn(number) {
//     return number > 0
// }
// console.log(checkIn("8"));



// bai 7:
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



// Bài 8:
// Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.
// function doiSo(arr) {
//     return arr.reverse();
// }
// console.log(doiSo([2, 3, 4, 5]));



// Bài 9:
// Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ,
// kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không.
// Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về - 1.
// function checkIn(arr, b) {
//     let flag = false
//     count = 0;
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] == b) {
//             flag = true;
//             count++;
//         }
//     }
//     if (flag) {
//         return count;
//     } else {
//         return -1;
//     }
// }
// console.log(checkIn(["a", "b", "c", "d", "a"], "a"));