let addKol = 1;
//let selectedRow = null;

   
function inputData(){
    var table = document.getElementById("databel");
    var baris = table.insertRow(addKol);
    
    var u = document.getElementById("username").value;
    var n = document.getElementById("nama").value;
    var a = document.getElementById("alamat").value;
    var p = document.getElementById("pekerjaan").value;
 
  
    var kol0 = baris.insertCell(0)
    kol0.innerHTML = `${addKol}`;
    var kol1 = baris.insertCell(1);
    kol1.innerHTML = u;
    var kol2 = baris.insertCell(2);
    kol2.innerHTML = n;
    var kol3 = baris.insertCell(3);
    kol3.innerHTML = a;
    var kol4 = baris.insertCell(4);
    kol4.innerHTML = p;
    

addKol++;
}