

window.onload = function () {
    document.getElementById("btn_on_off").onclick = function () {
        document.getElementById("btn_on_off").innerHTML = '点击打开';
        if (document.getElementById("Catalog").className == "menu hide") {
            document.getElementById("Catalog").setAttribute("class", "menu active");

        } else {
            document.getElementById("Catalog").setAttribute("class", "menu hide");
            document.getElementById("btn_on_off").innerHTML = '点击关闭';
        }
    }

}