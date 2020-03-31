function ClearAll() {
    document.getElementById("userid").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";

   
}

function SetCookies() {
    
    document.cookie = "userid = " + document.getElementById("userid").value + "|firstname = " + document.getElementById("firstname").value
        + " |lastname = " + document.getElementById("lastname").value + " |email = " + document.getElementById("email").value;
    alert(document.cookie);
    
}


function GetCookies() {
    var arr = document.cookie.split('|');
    alert(arr.length);
    //console.log(arr);

    for (var i = 0; i < arr.length; i++) {
        var sarr = arr[i].split('=');
        //alert("0: " + sarr[0] + " --- 1:" + sarr[1]);
        document.getElementById(sarr[0]).innerText = sarr[1];
    }
}