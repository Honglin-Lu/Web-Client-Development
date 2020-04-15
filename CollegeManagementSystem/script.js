var courses = [];

function register() {

    var coursename = document.getElementById("coursename").value;
    var teachername = document.getElementById("teachername").value;
    var hours = document.getElementById("hours").value;

    
    courses.push
        ({
            "coursename": coursename,
            "teachername": teachername,
            "hours": hours,

        });

    clean();

    list();
    

}

function clean() {
    document.getElementById("coursename").value = "";
    document.getElementById("teachername").value = "";
    document.getElementById("hours").value = "";


    document.getElementById("coursename").focus();

    document.getElementById("btnRegister").style.display = "inline-block";
    document.getElementById("btnConfirm").style.display = "none";
    document.getElementById("btnSave").style.display = "none";
    document.getElementById("btnRemove").style.display = "none";
    document.getElementById("btnCancel").style.display = "none";
}



function list() {

    var table = document.getElementById("table");


    table.innerHTML = "";


    for (var index = 0; index < courses.length; index++) {

        var line = table.insertRow(-1);
        var column1 = line.insertCell(0);
        var column2 = line.insertCell(1);
        var column3 = line.insertCell(2);
        var column4 = line.insertCell(3);
        var column5 = line.insertCell(4);


        column1.innerHTML = index + 1;
        column2.innerHTML = courses[index].coursename;
        column3.innerHTML = courses[index].teachername;
        column4.innerHTML = courses[index].hours;
        column5.innerHTML = "<button type='button' class='btn btn-success' onclick='select(" + index + ")'> Select </button>";

    }
}


function select(lineNO) {

        document.getElementById("id").value = lineNO;
        document.getElementById("coursename").value = courses[lineNO].coursename;
        document.getElementById("teachername").value = courses[lineNO].teachername;
        document.getElementById("hours").value = courses[lineNO].hours;

        
        document.getElementById("btnRegister").style.display = "none";
        document.getElementById("btnConfirm").style.display = "inline-block";
        document.getElementById("btnSave").style.display = "inline-block";
        document.getElementById("btnRemove").style.display = "inline-block";
        document.getElementById("btnCancel").style.display = "inline-block";
       
    }

    function remove() {
        var id = document.getElementById("id").value;

        courses.splice(id, 1);

        clean()
        
        list()

    }

    function save() {
        var id = document.getElementById("id").value;
        var coursename = document.getElementById("coursename").value;
        var teachername = document.getElementById("teachername").value;
        var hours = document.getElementById("hours").value;

        
        courses[id] = {
            "coursename": coursename,
            "teachername": teachername,
            "hours": hours,
        };

        clean();

        list();

    }


function SetCookies() {
    document.cookie = "coursename=" + document.getElementById("coursename").value
        + "|teachername=" + document.getElementById("teachername").value
        + "|hours=" + document.getElementById("hours").value;
}

function GetCookies() {
    var arr = document.cookie.split('|');
    
    var string;
    for (var i = 0; i < arr.length; i++) {
        var sarr = arr[i].split('=');
        document.getElementById(sarr[0]).innerText = sarr[1];
    }
}