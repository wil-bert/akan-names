var CC, YY, MM, DD, d, dayOfWeek;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function getAkanName(){
    var gender = document.getElementsByName("gender");
    if (document.getElementById("year").value == ""){
        alert ("Enter a valid year!");
        document.getElementById("year").focus();
        return false;
    }else if (document.getElementById("moth").value == "" || document.getElementById("moth").value < 0 || document.getElementById("moth").value > 12){
        alert ("Enter a valid month!");
        document.getElementById("moth").focus();
        return false;
    }else if (document.getElementById("date").value == "" || document.getElementById("date").value < 0 || document.getElementById("date").value > 31){
        alert ("Enter a valid date!");
        document.getElementById("date").focus();
        return false;
    }else if (gender[0].checked == false && gender[1].checked == false){
        alert ("Select male or female!");
        return false;
    }else{
        return true;
    }

}

function calculateDayOfWeek(){
    year = document.getElementById("year").value;
    CC = parseInt(year .substring(0,2));
    YY = parseInt(year .substring(2,4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
    console.log(d);//Test for calculateDayOfWeek
    return (Math.floor(d));
}

function getGender(){
    var gender = document.getElementsByName("gender");
    if (gender[0].checked == true){
        var gender = "male";
    }else if (gender[1].checked == true){
        var gender = "female";
    }else{
        return false;
    }
    switch(gender){
        case "male":
            if(dayOfWeek == 1){
                alert("Born on" +dayNames[0] + ",Your Akan name is" +maleNames[0]);
            }else if (dayOfWeek == 2){
                alert("Born on" +dayNames[1] + ",Your Akan name is" +maleNames[1]);
            }else if (dayOfWeek == 3){
                alert("Born on" +dayNames[2] + ",Your Akan name is" +maleNames[2]);
            }else if (dayOfWeek == 4){
                alert("Born on" +dayNames[3] + ",Your Akan name is" +maleNames[3]);
            }else if (dayOfWeek == 5){
                alert("Born on" +dayNames[4] + ",Your Akan name is" +maleNames[4]);
            }else if (dayOfWeek == 6){
                alert("Born on" +dayNames[5] + ",Your Akan name is" +maleNames[5]);
            }else if (dayOfWeek == 7){
                alert("Born on" +dayNames[6] + ",Your Akan name is" +maleNames[6]);
            }
        break;
        case "female":
            if(dayOfWeek == 1){
                alert("Born on" +dayNames[0] + ",Your Akan name is" +femaleNames[0]);
            }else if (dayOfWeek == 2){
                alert("Born on" +dayNames[1] + ",Your Akan name is" +femaleNames[1]);
            }else if (dayOfWeek == 3){
                alert("Born on" +dayNames[2] + ",Your Akan name is" +femaleNames[2]);
            }else if (dayOfWeek == 4){
                alert("Born on" +dayNames[3] + ",Your Akan name is" +femaleNames[3]);
            }else if (dayOfWeek == 5){
                alert("Born on" +dayNames[4] + ",Your Akan name is" +femaleNames[4]);
            }else if (dayOfWeek == 6){
                alert("Born on" +dayNames[5] + ",Your Akan name is" +femaleNames[5]);
            }else if (dayOfWeek == 7){
                alert("Born on" +dayNames[6] + ",Your Akan name is" +femaleNames[6]);
            }
        break
        default:

    }
}
function findName(){
    dayOfWeek = calculateDayOfWeek();
    getGender();
}
