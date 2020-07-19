window.onload = validate;

function validate() {
    var alerttxt = "!!!STOP!!!\nDies ist nicht die Originalseite von Luca Schmidt\nCopyright ist ungültig";
    var elem = document.getElementById('copyright');
    console.log(elem.innerHTML);
    if (elem.innerHTML != "© Copyright x_gaming, 2020") {
        alert(alerttxt);
        elem.innerHTML = "&copy; Copyright x_gaming, 2020";
    }
}