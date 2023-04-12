export class Person{
    constructor(ma, hoTen, diaChi, email){
        this.ma = ma;
        this.hoTen = hoTen;
        this.diaChi = diaChi;
        this.email = email;
    }
}
export class Student extends Person{
    constructor(ma, hoTen, diaChi, email, toan, ly, hoa){
        super(ma, hoTen, diaChi, email);
        this.toan = toan;
        this.ly = ly;
        this.hoa = hoa;
    }
    diemTrungBinh(){
        let diemTrungBinh = (this.toan + this.ly + this.hoa)/3
        return diemTrungBinh.toFixed(1)
    }
    loaiDoiTuong(){
        return 'Student';
    }
}
export class Employee extends Person{
    constructor(ma, hoTen, diaChi, email, soNgayLam, luong1Ngay){
        super(ma, hoTen, diaChi, email);
        this.soNgayLam = soNgayLam;
        this.luong1Ngay = luong1Ngay
    }
    tinhLuong(){
        let luong = this.soNgayLam *this.luong1Ngay;
        return luong;
    }
    loaiDoiTuong(){
        return 'employee';
    }
}
export class Customer extends Person{
    constructor(ma, hoTen, diaChi, email, tenCongTy, triGiaHoaDon, danhGia){
        super(ma, hoTen, diaChi, email);
        this.tenCongTy = tenCongTy;
        this.triGiaHoaDon = triGiaHoaDon
        this.danhGia = danhGia
    }
    loaiDoiTuong(){
        return 'customer';
    }
}