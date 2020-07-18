var submission = function() {
    var dayNames = ["Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"];
    var maleNames = ["Kwasi, Kwadwo, Kwabena, Kwaku, Yaw, Kofi, Kwame"];
    var femalesNames = ["Akosua, Adwoa, Abenaa, Akua, Yaa, Afua, Ama"];
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var date = parseInt(document.getElementById("date").value);
    var dateOfBirth = new Date(year + "/" + month + "/" + day);
    var results = dateOfBirth.getDay();
    var output = document.getElementById("output");
    var male = document.getElementById("male");
    var female = document.getElementById("female");


}
