// Bài 1
/**
 * - Input: 
 *  + Lương 1 ngày: 100k
 *  + Số ngày làm: 5
 * 
 * - Process: Lương = Lương 1 ngày * Số ngày làm
 *
 * - Ouput: Lương
 */

var luong1Ngay = 100000;
var soNgayLam = 5;

var luong = luong1Ngay * soNgayLam;

console.log("Bài 1/ Lương là: " + luong);


// Bài 2
/**
 * -Input: 5 số thực
 * 
 * -Process: 
 *  + Tổng 5 số thực
 *  + Lấy tổng chia 5
 * 
 * -Ouput: Giá trị trung bình
 */

var number1 = 4;
var number2 = 9;
var number3 = 10;
var number4 = 65;
var number5 = 89;

var tong = number1 + number2 + number3 + number4 + number5;
var trungBinhCong = tong/5;

console.log ("Bài 2/ Giá trị trung bình là: " + trungBinhCong);


// Bài 3
/**
 * -Input:
 *  + Tỉ giá USD -> VND: 23.500
 *  + Số tiền USD
 * 
 * -Process:
 *  Tiền VND = Số tiền USD * Tỉ giá USD
 * 
 * -Output: 
 *  Tiền VND
 */

var tiGia = 23500;
var soTienUSD = 5;

var tienVND = soTienUSD + tiGia;

console.log("Bài 3/ Số tiền sau khi quy đổi là: " + tienVND);

// Bài 4
/**
 * -Input:
 *  +Chiều dài HCN
 *  +Chiều rộng HCN
 * 
 * -Process:
 *  +Chu Vi = (Dài + Rộng) * 2
 *  +Diện Tích = Dài * Rộng
 * 
 * -Output:
 *  +Diện Tích
 *  +Chu Vi
 */

var dai = 7;
var rong = 9;

var chuVi = (dai + rong) * 2;
var dienTich = dai * rong;

console.log("Bài 4/ \nChu Vi là: " + chuVi + "\nDiện Tích là: " + dienTich);


// Bài 5
/**
 * -Input:
 *  + Số có 2 chữ 
 * 
 * -Process:
 *  + Lấy số hàng chục
 *  + Lấy số hàng đơn vị
 *  + Tổng 2 ký số = Số hàng chục + Số hàng đơn vị
 * 
 * -Output:
 *  + Tổng 2 ký số
 */

var number = 71;

var soHangChuc = Math.floor(number / 10);
var soHangDonVi = number % 10;

var tong2KySo = soHangChuc + soHangDonVi;

console.log("Bài 5: Tổng 2 ký số là: " + tong2KySo);

