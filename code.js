function checkEmpty() {
    var usr = document.forms["login"]["username"].value;
    var pwd = document.forms["login"]["password"].value;
    if (usr == "" || pwd == "") {
        alert("Invalid username/password!")
    }
    else {
        localStorage.setItem("username", usr);
        localStorage.setItem("password", pwd);

        localStorage.setItem("username", usr)

        window.location.href = "page.html";
    }
}




function openTab(evt, page) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(page).style.display = "block";
    evt.currentTarget.className += " active";
}

function convertToMeters() {
    event.preventDefault();
    var feet = document.getElementById("feet").value;

    if (feet == "") {
        alert("Invalid value!");
    }
    else {
        var result = (Math.round((feet / 3.281) * 100)) / 100
        document.getElementById("meters_print").innerHTML = result;
    }
}

function convertToFeet() {
    event.preventDefault();
    var meters = document.getElementById("meters").value;
    console.log(meters)
    if (meters == "") {
        alert("Invalid value!");
    }
    else {
        var result = (Math.round((meters * 3.281) * 100)) / 100;
        document.getElementById("feet_print").innerHTML = result;
    }
}

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    openTab(event, 'page1')
});