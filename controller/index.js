import Validation from '../util/Validation.js'
import {Customer,Employee, Student} from '../models/Person.js'
// import Person from '../../models/Person.js'
document.getElementById('btnThemSV').onclick = () =>{
    let sv = new Student()
    sv.ma = document.getElementById('maSV').value;
    sv.hoTen = document.getElementById('hoTenSV').value;
    sv.diaChi = document.getElementById('diaChi').value;
    sv.email = document.getElementById('email').value;
    sv.toan = document.getElementById('diemToan').value;
    sv.ly = document.getElementById('diemLy').value;
    sv.hoa = document.getElementById('diemHoa').value;

    /**---------------------------------Bắt lỗi------------------------------------------------------ */
    var kiemTra = new Validation()
    /**---------------------------------Bắt lỗi mã ------------------------------------------------------ */
    // Khởi tạo biến lổi của mã
    var loiMaSV = 0
    //Nếu mã có lổi thì lổi +1
    // kiểm tra rổng
    if(!kiemTra.kiemTraRong(sv.ma, 'tbMaSV','Mã sinh viên')){loiMaSV++}
    // Nếu mã có khoảng cách là không hợp lệ
    else if(!kiemTra.kiemTraKhoangCach(sv.ma, 'tbMaSV','Mã sinh viên')){loiMaSV++}

    // Nếu có lổi thì hiện class='sp-thongbao-hide'
    showHideClass(loiMaSV,'#tbMaSV')

    /**---------------------------------Bắt lỗi Họ tên------------------------------------------------------ */
      // Khởi tạo biến lổi của họ tên
      var loiHoTen = 0
      //Nếu họ tên có lổi thì lổi +1
    //  chỉ có A-Z và a-z và khoảng cách
      if(!kiemTra.kiemTraRong(sv.hoTen, 'tbHoTenSV','Họ tên')){loiHoTen++}
      else if(!kiemTra.kiemTraKyTu(sv.hoTen, 'tbHoTenSV','Họ tên')){loiHoTen++}
     // Nếu có lổi thì hiện class='sp-thongbao-hide'
    showHideClass(loiHoTen,'#tbHoTenSV')

    
  /**---------------------------------Bắt lỗi địa chỉ------------------------------------------------------ */
    // Khởi tạo biến lổi của địa chỉ
    var loiDiaChi = 0
    //Nếu địa chỉ có lổi thì lổi +1
    if(!kiemTra.kiemTraRong(sv.diaChi, 'tbDiaChi','Địa chỉ')){loiDiaChi++}
    

     // Nếu có lổi thì hiện class='sp-thongbao-hide'
     showHideClass(loiDiaChi,'#tbDiaChi')

    /**---------------------------------Bắt lỗi email ------------------------------------------------------ */
    // Khởi tạo biến lổi của Email
    var loiEmail = 0
    //Nếu email có lổi thì lổi +1
    if(!kiemTra.kiemTraRong(sv.email, 'tbEmail','Email')){loiEmail++}
    else if(!kiemTra.kiemTraEmail(sv.email, 'tbEmail','Email')){loiEmail++}

    // Nếu có lổi thì hiện class='sp-thongbao-hide'
    showHideClass(loiEmail,'#tbEmail')
    
    /**---------------------------------Bắt lỗi điểm toán------------------------------------------------------ */
    // Khởi tạo biến lổi của Toán
    var loiToan = 0
    //Nếu môn toán có lổi thì lổi +1
    if(!kiemTra.kiemTraRong(sv.toan, 'tbToan','Toán')){loiToan++}
    else if(!kiemTra.kiemTraGiaTri(sv.toan, 'tbToan','Toán',0 ,10)){loiToan++}

     // Nếu có lổi thì hiện class='sp-thongbao-hide'
     showHideClass(loiToan,'#tbToan')

    /**---------------------------------Bắt lỗi điểm lý------------------------------------------------------ */
    // Khởi tạo biến lổi của lý
    var loiLy = 0
    //Nếu môn lý có lổi thì lổi +1
    if(!kiemTra.kiemTraRong(sv.ly, 'tbLy','Lý')){loiLy++}
    else if(!kiemTra.kiemTraGiaTri(sv.ly, 'tbLy','Lý',0 ,10)){loiLy++}

     // Nếu có lổi thì hiện class='sp-thongbao-hide'
     showHideClass(loiLy,'#tbLy')

    /**---------------------------------Bắt lỗi điểm hóa------------------------------------------------------ */
    // Khởi tạo biến lổi của số điện thoại
    var loiHoa = 0
    //Nếu họ tên có lổi thì lổi +1
    if(!kiemTra.kiemTraRong(sv.hoa, 'tbHoa','Hóa')){loiHoa++}
    else if(!kiemTra.kiemTraGiaTri(sv.hoa, 'tbHoa','Hóa',0 ,10)){loiHoa++}

     // Nếu có lổi thì hiện class='sp-thongbao-hide'
     showHideClass(loiHoa,'#tbHoa')


// Nếu lổi > 0 thì out
if(loiMaSV!=0 || loiHoTen!=0 || loiDiaChi!=0 || loiEmail!=0 || loiToan!=0|| loiLy!=0|| loiHoa!=0){
  
  return
}
}

//Hàm xét nếu có lổi thì hiện class='sp-thongbao-hide'
//Hàm xét không nếu có lổi thì hiện class='sp-thongbao'
const showHideClass = (loi, idTB)=>{
    if(loi!=0){
        if(document.querySelector(idTB).className == 'sp-thongbao'){
        document.querySelector(idTB).className = 'sp-thongbao-hide'
        }
    }
    else{
        if(document.querySelector(idTB).className = 'sp-thongbao-hide'){
        document.querySelector(idTB).className = 'sp-thongbao'
    }}
}