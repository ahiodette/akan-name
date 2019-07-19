var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var gender = document.getElementsByName("gender").value;

var calend = document.getElementById('bday').value;
var birthday = calend.split("-");

var year=parseInt(birthday[0]);
var month=parseInt(birthday[1]);
var day= parseInt(birthday[2]);

var cc = Math.round((year-1)/(100+1));
var bornDay = Math.round( ( ( (CC/4) -2*CC-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);


var changeLabel = function () {
    for(var i=1; i<=daysOfWeek.length; i++)
    {
        if((bornDay==i)&&(gender=="male")){
            result="You were born on "+daysOfWeek[i-1]+". So, your name should be "+maleNames[i-1];  
        }
        else if((bornDay==i)&&(gender=="female")){
            result="You were born on "+daysOfWeek[i-1]+". So, your name should be "+femaleNames[i-1];
        }
    }
}

