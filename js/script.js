var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var CC,YY,MM,DD,d;

function validate() {
    var year = parseInt(document.getElementById("year").value);
    if (year = "" || year < 1600){
        alert("Enter a valid year")
        return false;
    }else if (year >= 1600){
        year;
    }
    var month = parseInt(document.getElementById("month").value);
    if (month = "" || month < 0 || month > 12){
        alert("Enter a valid month")
        return false;
    }else if (month > 0 && month <= 12){
        month;
    }
    var date = parseInt(document.getElementById("date").value);
    if (date = "" || date < 0 || date > 31){
        alert("Enter valid date")
        return false;
    }else if (date > 0 && date <= 31){
        date;
    }
}

function calculateDayValue(){
    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(month.substring(0,2));
    DD = parseInt(date.substring(0,2));
    d = (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
    console.log(d);
    d = calculateDayValue();
}

  var gender = document.querySelector('input[name="gender"]:checked').value;
  switch (gender){
    case "male":
        if (d == 0){
            alert("Born on" + daysOfWeek[0] + ",Your Akan name is" + maleNames[0]);
        }else if (d == 1){
            alert("Born on" + daysOfWeek[1] + ",Your Akan name is" + maleNames[1]);
        }else if (d == 2){
            alert("Born on" + daysOfWeek[2] + ",Your Akan name is" + maleNames[2]);
        }else if (d == 3){
            alert("Born on" + daysOfWeek[3] + ",Your Akan name is" + maleNames[3]);
        }else if (d == 4){
            alert("Born on" + daysOfWeek[4] + ",Your Akan name is" + maleNames[4]);
        }else if (d == 5){
            alert("Born on" + daysOfWeek[5] + ",Your Akan name is" + maleNames[5]);
        }else if (d == 6){
            alert("Born on" + daysOfWeek[6] + ",Your Akan name is" + maleNames[6]);
        }
    break;
    case "female":
        if (d == 0){
            alert("Born on" + daysOfWeek[0] + ",Your Akan name is" + femaleNames[0]);
        }else if (d == 1){
            alert("Born on" + daysOfWeek[1] + ",Your Akan name is" + femaleNames[1]);
        }else if (d == 2){
            alert("Born on" + daysOfWeek[2] + ",Your Akan name is" + femaleNames[2]);
        }else if (d == 3){
            alert("Born on" + daysOfWeek[3] + ",Your Akan name is" + femaleNames[3]);
        }else if (d == 4){
            alert("Born on" + daysOfWeek[4] + ",Your Akan name is" + femaleNames[4]);
        }else if (d == 5){
            alert("Born on" + daysOfWeek[5] + ",Your Akan name is" + femaleNames[5]);
        }else if (d == 6){
            alert("Born on" + daysOfWeek[6] + ",Your Akan name is" + femaleNames[6]);
        }
    break;
    default:
}
function findName(){
    d = calculateDayValue();
    gender();
}
