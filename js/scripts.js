


function giveName() {
    var calend = document.getElementById('bday').value;
    var birthday = calend.split("-");

    var year = parseFloat(birthday[0]);
    var month = parseFloat(birthday[1]);
    var day = parseFloat(birthday[2]);
    var gender = document.querySelector("input[name='gender']:checked").value;

    var cc = (year - 1) / 100 + 1;
    var bornDay = Math.round((((cc / 4) - 2 * cc - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7);
    console.log(cc);

    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (gender === "male") {
        console.log("You were born on " + daysOfWeek[bornDay - 1] + ". So, your name should be " + maleNames[bornDay - 1]);
        document.getElementById("display").innerHTML = "You were born on " + daysOfWeek[i - 1] + ". So, your name should be " + maleNames[i - 1];
    }
    else if (gender === "female") {
        console.log("You were born on " + daysOfWeek[bornDay - 1] + ". So, your name should be " + femaleNames[bornDay - 1]);
        document.getElementById("display").innerHTML = "You were born on " + daysOfWeek[i - 1] + ". So, your name should be " + femaleNames[i - 1];
    }
    else {
        console.log("Invalid input");
        document.getElementById("display").innerHTML = "Invalid input";
    }

}

