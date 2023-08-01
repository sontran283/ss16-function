// bai 1:
// thuc hanh tao va goi ham
// function processConfirm(answer) {
//     let result = "";
//     if (answer) {
//         result = "Excellent. We'll play a nice game of chess.";
//     } else {
//         result = "Maybe later then.";
//     }
//     return result;
// }
// let confirmAnswer = confirm("Shall we play a game?");
// let theAnswer = processConfirm(confirmAnswer);
// alert(theAnswer);


// function trochoi(cauhoi) {
//     //chương trình khai báo một hàm tên là trochoi với một tham số đầu vào là cauhoi
//     let traloi = "";
//     if (cauhoi) {
//         traloi = "tuyệt, chúng ta sẽ chơi một ván";
//     } else {
//         traloi = "có lẽ sẽ là lần sau";
//     }
//     return traloi; //return trả về một giá trị từ một hàm
// }
// let confirmcauhoi = confirm("bây giờ chúng ta chơi một trò chơi?");
// let tungcauhoi = trochoi(confirmcauhoi);
// alert(tungcauhoi);



// bai 2:
// chuyển đổi nhiệt độ
{/* <p>
        <label>doF</label>
        <input id="inputdoF" type="number" placeholder="doF" ;
        oninput="temperatureConverter(this.value)"
        onchange="temperatureConverter(this.value)"> 
        <!-- temperatureConverter  chuyen do F sang do C -->
    </p>
    <p>doC: <span id="outputdoC"></span></p>
    <script>
        function temperatureConverter(valNum) {
            valNum = parseFloat(valNum);   //parseFloat  đổi một chuỗi thành một số dấu thập phân//
            document.getElementById("outputdoC").innerHTML = (valNum - 32) / 1.8;
        }
    </script> */}



// bai 3:
// Tìm giá trị nhỏ nhất của mảng
// function timmin(arr) {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }

// const a = [2, 3, 4, 5, 6, 67, 1];
// const min = timmin(a);
// console.log("giá trị nhỏ nhát là: " + min);



// bai 4:
// HÀM KIỂM TRA ĐỐI XỨNG:
// let input = ("nhap vao chuoi ki tu bat ki");
// function isPalindrome(str) {
//     // Chuyển chuỗi về dạng chữ thường và loại bỏ khoảng trắng và dấu câu
//     str = str.toLowerCase().replace(/[a-ZA-Z0-9]/g, "");
//     // Đảo ngược chuỗi
//     let reversed = str.split("").reverse().join("");
//     // So sánh chuỗi gốc với chuỗi đảo ngược
//     return str === reversed;
// }
// console.log(isPalindrome(input));
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false
// console.log(isPalindrome("A man, a plan, a canak, Panam!")); // true



// bai 5:
// HÀM QUY ĐỔI NHIỆT ĐỘ (ĐỘ C SANG ĐỘ F)
// F = C * 1.8 + 32
// C = (F - 32) / 1.8
// function celsiusToFahrenheit(celsius) {
//     let fahrenheit = celsius * 1.8 + 32;
//     return fahrenheit;
// }
// function fahrenheitToCelsius(fahrenheit) {
//     let celsius = (fahrenheit - 32) / 1.8;
//     return celsius;
// }
// console.log(celsiusToFahrenheit(25));
// console.log(fahrenheitToCelsius(77));



// bai 6:
// ham tinh tong cac phan tu trong mang
// function sum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
// let arr = [1, 2, 3, 4, 5, 6];
// let arr2 = [10, 20, 30, 40, 50];
// let arr3 = [1, 3, 5, 7, 9];

// console.log(sum(arr));
// console.log(sum(arr2));
// console.log(sum(arr3));



// bai 7:
// HÀM VIẾT HOA CHỮ CÁI ĐẦU TIÊN
// function capitalize(str) {
//     let words = str.toLowerCase().spliy("");
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].s[lice(1)];
//     }
//     return words.join("");
// }
// let a = "hello WORD";
// let b = "rIkkEi acaDEMY";
// console.log(capitalize(a)); // Hello word
// consoloe.log(capitalize(v)); // Rikkei Academy