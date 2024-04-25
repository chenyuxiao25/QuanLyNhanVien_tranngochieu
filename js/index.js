var dsnv =[];
var dataJson  = localStorage.getItem("DSNV");
console.log("🚀 ~ dataJson:", dataJson)
if (dataJson != null){
    var dataRow = JSON.parse (dataJson);
for ( var i = 0 ; i < dataRow.length ;i++){
    var data = dataRow[i];
    var nv  = new NhanVien(data.taikhoan,data.hoten,data.email,data.matkhau,data.ngaylam,data.luongcoban,data.chucvu,data.gioLam);
dsnv.push(nv);
renderDSNV(dsnv)

}
console.log("🚀 ~ dsnv:", dsnv)

}

function themNhanVien(){
var nv = layThongTinTuForm();
    
console.log("🚀 ~ themNhanVien ~ nv:", nv)
dsnv.push(nv)

var dataJson = JSON.stringify(dsnv);
localStorage.setItem("DSNV",dataJson)
renderDSNV(dsnv)

resetForm()
}
console.log("🚀 ~ themNhanVien ~ dsnv:", dsnv)





function xoaNv(id) {
console.log("🚀 ~ xoaNv ~ id:", id);
var index = dsnv.findIndex(function(item){
return item.taikhoan == id

})
dsnv.splice(index,1);
renderDSNV(dsnv)




}

function suNhanVien(id)
{
var index =dsnv.findIndex(function(item){
    return item.taikhoan == id;
})

var nv = dsnv[index];
console.log("🚀 ~ nv:", nv)
document.getElementById("tknv").value = nv.taikhoan;
document.getElementById("tknv").value = nv.taikhoan;
document.getElementById("name").value= nv.hoten
document.getElementById("email").value= nv.email;
document.getElementById("password").value=nv.matkhau;
document.getElementById("datepicker").value= nv.ngaylam
document.getElementById("luongCB").value=nv.luongcoban;
document.getElementById("chucvu").value= nv.chucvu;
document.getElementById("gioLam").value= nv.gioLam;
document.getElementById("tknv").readOnly = true;




}

function capNhat(){
    var nv = layThongTinTuForm();
    console.log("🚀 ~ capNhat ~ nv:", nv)


var index = dsnv.findIndex(function(item){
  return item.taikhoan === nv.taikhoan
})


dsnv[index] = nv;
renderDSNV(dsnv)
}





function resetForm(){
    document.getElementById("Form").reset();
}