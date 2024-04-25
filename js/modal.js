// Show/hide password onClick of button using Javascript only

// https://stackoverflow.com/questions/31224651/show-hide-password-onclick-of-button-using-javascript-only
function layThongTinTuForm(){

    var taikhoan = document.getElementById("tknv").value;
    var hoten = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matkhau = document.getElementById("password").value;
    var ngaylam = document.getElementById("datepicker").value;
    var luongcoban = document.getElementById("luongCB").value;
    var chucvu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;
    var nv = new NhanVien(taikhoan,hoten,email,matkhau,ngaylam,luongcoban,chucvu,gioLam)

return nv;

}

function NhanVien(taikhoan,hoten,email,matkhau,ngaylam,luongcoban,chucvu,gioLam){

    this.taikhoan = taikhoan;
    this.hoten = hoten;
    this.email = email;
    this.matkhau= matkhau;
    this.ngaylam = ngaylam;
    this.luongcoban = luongcoban;
    this.chucvu = chucvu ;
    this.gioLam = gioLam;
    this.tongLuong = function(){
        if (this.chucvu =="Sếp"){
            return (luongcoban * 3 )* gioLam;
        }   
        else if ( this.chucvu ==="Trưởng phòng"){
            return (luongcoban *2) * gioLam;
        }
        else
        {
            return luongcoban * gioLam;
        }
    }
    this.xepLoai = function (){
        if(this.gioLam >=192){
            return "nhan vien xuat sac"
        }
        else if (this.gioLam >= 176){
            return "nhan vien gioi"
        }
        else if (this.gioLam >= 160){
            return "nhan vien kha"
        }
        else {
            return "nhan vien trung binh"
        }
    }
}
function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);

//   font-family: 'Vibur', cursive;
//   font-family: 'Abel', sans-serif;
// font-family: 'Pacifico', cursive;
// font-family: 'Dancing Script', cursive;
// font-family: 'Alegreya', serif;
// font-family: 'Abril Fatface', cursive;
// font-family: 'Playball', cursive;
// font-family: 'Unica One', cursive;
// font-family: 'Oleo Script', cursive;
// font-family: 'Share', cursive;
// font-family: 'Overlock', cursive;
// font-family: 'Arima Madurai', cursive;
// font-family: 'Playfair Display', serif;
// font-family: 'Merriweather', serif;
// font-family: 'PT Serif', serif;
// font-family: 'Dosis', sans-serif;