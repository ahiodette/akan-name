var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var gender = document.getElementsByName("gender").value;

var calend = document.getElementById('bday').value;
var birthday = calend.split("-");

var year=parseInt(birthday[0]);
var month=parseInt(birthday[1]);
var day= parseInt(birthday[2]);
var changeLabel = function () {
    document.getElementById('result').innerHTML = "Kwame";
}

