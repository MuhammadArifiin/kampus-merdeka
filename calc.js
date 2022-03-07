function kosongAll() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
    frm.a2.value = "";
    frm.hasil.value = "";
}

function hitung(operator) {
    let frm = document.getElementById("formulir");
    let angka1 = parseInt(frm.a1.value);
    let angka2 = parseInt(frm.a2.value);
    let hasil = parseInt(frm.hasil.value);
    //jika inputan salah
    if (isNaN(angka1 && angka2) || (angka1 && angka2) == '') {
        alert("harap isi data berupa angka");
    } else if (operator == '+') {
        hasil = angka1 + angka2;
    } else if (operator == '-') {
        hasil = angka1 - angka2;
    } else if (operator == '*') {
        hasil = angka1 * angka2;
    } else if (operator == '/') {
        hasil = angka1 / angka2;
    } else if (operator == '^') {
        hasil = angka1 ** angka2;
    }

    frm.hasil.value = hasil;
}