// Bài 1: Viết chương trình cho người dùng nhập vào 3 số, viết hàm kiểm tra để tìm ra số bé nhất và in ra số đó
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
// console.log("so nho nhat trong ba so la: " + timMin(1, 30, 4));



// Bài 2:
// Viết hàm kiểm tra xem số người dùng nhập vào có phải là số nguyên tố hay không ?
// function snt(a) {
//     flag = true;
//     if (a % 2 == 0) {
//         flag = false;
//     }
//     if (flag) {
//         console.log("la so nguyen to");
//     } else {
//         console.log("khong la so nguyen to");
//     }
//     return a;
// }
// console.log(snt(11));



// bai 3:
// Cho mảng sau:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Viết hàm trả về tất cả các cặp số có tổng bằng 10.



// bai 4:
// Cho người dùng nhập vào chuỗi kí tự.Viết hàm kiểm tra xem tần suất xuất hiện của mỗi ký tự và in ra chúng
// cach1:
// let chuoi = prompt("Nhập vào chuỗi ký tự bất kì:"); // nhap chuoi minh can
// let chuDaXet = []; // mang luu cac chu minh da dem so lan cho no
// function countRepeat(chu) {
//     for (i = 0; i < chuDaXet.length; i++) {
//         if (chu == chuDaXet[i]) {
//             return;
//         }
//     }
//     let count = 0;
//     for (i = 0; i < chuoi.length; i++) {
//         if (chu == chuoi[i]) {
//             count++;
//         }
//     }
//     chuDaXet.push(chu);
//     return count;
// }
// for (let i = 0; i < chuoi.length; i++) {
//     let count = countRepeat(chuoi[i]);
//     if (count != undefined) {
//         console.log(`Chu ${chuoi[i]} xuat hien ${count} lan`);
//     }
// }

// cach 2:
function handleSubmit() {
    //lay ra gia tri cua o input
    let value = document.getElementById("input").value;
    console.log(value);
    value = value.toLowerCase();

    //tao mang de chua danh sach cac ki tu, va so lan xuat hien cua no,
    let array = [];

    //duyet tung ki tu cua chuoi trong o input， va kiem tra
    for (let i = 0; i < value.length; i++) {
        let index = checkIn(array, value.charAt(i));
        if (index >= 0) { // neu ki tu thi i ton tai trong mang array.
            // da ton tai ki tu, phai sua so lan xuat hien
            // for (let i = 0; i < array.length; i++) {
            //     if (array[i][0] == value.charAt(i)) {
            //         array[i][1] += 1;
            //     }
            // }
            array[index][1] += 1;
        } else {
            //chua ton tai, thi them moi vao mang array 1 phan tu co so lan xuat hien la 1.
            array.push([value.charAt(i), 1])
        }
    }
    //in ra ket qua
    for (let i = 0; i < array.length; i++) {
        console.log(`ky tu ${array[i][0]} xuat hien ${array[i][1]}lan`);
    }
}
// kiem tra ton tai cua mot ki tu o trong mot mang.
// va tra ve vi tri cua phan tu neu no ton tai.
// neu khong ton tai thi tra ve -1.
function checkIn(arr, char) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == char) {
            // ton tai
            return i;
        }
    }
    // chua ton tai
    return -1;
}



// bai 5:
// Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào.Thực thi hàm vừa khởi tạo
// function giaithua(a) {
//     all = 1;
//     for (i = 1; i <= a; i++) {
//         all *= i
//     }
//     return all;
// }
// console.log(giaithua(4));



// bai 6:
// Cho người dùng nhập vào chuỗi số bất kì.Viết hàm sắp xếp chuỗi số đó từ bé đến lớn
// function chuoi(nhapchuoi) {
//     return nhapchuoi.sort((a, b) => a - b);
// }
// console.log(chuoi([4, 5, 6, 7, 53, 6]));



// bai 7:
// Viết chương trình tạo hàm để kiểm tra xem năm người dùng nhập vào có phải năm nhuận không