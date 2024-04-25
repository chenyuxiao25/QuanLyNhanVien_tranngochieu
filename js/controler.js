function renderDSNV (dsnv){
    var contentHTML ="";
for(var i = 0 ; i < dsnv.length;i++ ){
    var nv =dsnv[i];




    var contenTr =`
    <tr>
    <td>${nv.taikhoan}</td>
    <td>${nv.hoten}</td>
    <td>${nv.email}</td>
    <td>${nv.ngaylam}</td>
    <td>${nv.chucvu}</td>
    <td>${nv.tongLuong()}</td>
    <td>${nv.xepLoai()}</td>
    <td><button onclick="xoaNv('${nv.taikhoan}')" class="btn btn-danger">xoa</button></td>
    <td><button data-target="#myModal" data-toggle="modal" onclick="suNhanVien('${nv.taikhoan}')" class="btn btn-danger">sua</button></td>
    </tr>
    </tr>
    
    `

    contentHTML += contenTr;
}
document.getElementById("tableDanhSach").innerHTML =contentHTML;
}