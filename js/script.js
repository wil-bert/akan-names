function validate(){
    var date = document.getElementById("date").value;
    var dayValue = date.split("-");
    var year = dayValue[0];
    var month = dayValue[1];
    var day = dayValue[2];

    var CC = parseInt(year.substring(0,2));
    var YY = parseInt(year.substring(2,4));
    var MM = parseInt(month);
    var DD = parseInt(day);
    var calculateDay =Math.floor( ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7);

    var gender = document.getElementById("gender").value;
    var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    if (date == " " && gender === "male"){
        alert("Born on " + dayOfWeek[calculateDay] + " Your akan name is " + maleNames[calculateDay]);
    }
    else if (date == " " && gender === "female"){
        alert("Born on " + dayOfWeek[calculateDay] + " Your akan name is " + femaleNames[calculateDay]);
    }
    else{
        alert("Enter valid input");
    }
}
