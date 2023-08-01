// let a = +prompt("nhap vao so a")
// let b = +prompt("nhap vao so b")
// console.log("tong 2 so la" + (a + b));

// giải quyết bài toán tính tổng 2 số sử dụng hàm.
// xac dinh duoc nhiem vu cua ham: tinh tong 2 so
// xac dinh duoc ten cua ham:  total
// xac dinh duoc dau vao: 2 tham so a,b
// xac dinh dau ra: tra ve tong cua 2 so truyen vao
function total(a, b) {
    let sum = a + b;
    console.log(`tong cua 2 so ${a} va ${b} la ${sum}`);
}
total(3, 5);
total(100, 200);


//Ví dụ, để tính tổng của các số từ 1 đến 10, tổng của các số từ 20 đến 37, tổng của các số từ 35 – 49:
//Ví dụ, để tính tổng của các số từ 1 đến 10, tổng của các số từ 20 đến 37, tổng của các số từ 35 – 49:
var sum = 0;
for (var i = 1; i <= 10; i++)
    sum += i;
console.log("Sum from 1 to 10 is " + sum);
sum = 0;
for (var i = 20; i <= 37; i++)
    sum += i;
console.log("Sum from 20 to 37 is " + sum);
sum = 0;
for (var i = 35; i <= 49; i++)
    sum += i;
console.log("Sum from 35 to 49 is " + sum);
// nhiem vu: tinh tong cac so tu a-b
// tem ham: sumNumbers
// xac dinh dau va: 2 tham so
// dau ra: tong cac so nam trong khoang tu a-b
function sumNumbers(a, b) {
    sum = 0;
    for (var i = a; i <= b; i++)
        sum += i;
    console.log("Sum from a to b is " + sum);
}
sumNumbers(1, 10);
sumNumbers(20, 37);
sumNumbers(35, 49);


// cu phap tong quat cua ham
// function tenHam(a, b, c) {
//     console.log(a);
//     return 1000;  //tra ve gia tri ngta dung tu return
// }
// console.log(tenHam(1));
// let result = tenHam(1);  //or


// chuyen vao doi so (goi ham): argument
// khai bao tham so ( dinh nghia ham) : parameter


// pham vi cua bien
// var
// let va const
// function name(params) {
//     let y = 10

// }
// console.log(y);



//Pass-by-value
//Pass-by-value

//ham increment de tang gia tri cua tham so n len 1 don vi
// function increment(x) {
//     x++;
//     console.log("x inside the method is " + x);
// }
// function main() {
//     var x = 1;
//     console.log("Before the call, x is " + x); //x=1
//     increment(x);
//     console.log("After the call, x is " + x);  //x=2
// }
// main()


// vi du khac cua Pass-by-value
let m = 1; // khai bao bien m=1
// dinh nghia 1 ham nhan vao 1 tham so co ten la a va tang a them 2 don vi
function changeM(a) { //a=m , truyen tham tri hay con goi la truyen gia tri
    a = a + 1;
}
//goi ham va truyen vao gia tri cua bien m (Pass-by-value)
changeM(m);
console.log(m); // coppy gia tri cua m sau day chuyen cho a, m khong thay doi gia tri



function changeArr0(arr) {
    // tham chieu hay con goi la truyen dia chi
    arr[0]++;
}
let arr1 = [1, 2, 3, 4];
changeArr0(arr1);
console.log(arr1);

// so chuoi, tham tri
// chi su dung tham tri