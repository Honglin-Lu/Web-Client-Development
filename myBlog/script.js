
        window.onload = (function () {
       
        
        document.getElementById("send").onclick = function (event) {
            
            var name = document.getElementById("name");
            var errorname = document.getElementById("errorname");
            if (name.value == "") {
                errorname.innerText = "* Please enter your name!";
                name.focus()
                return false

            }
            var email = document.getElementById("email");
            var erroremail = document.getElementById("erroremail");
            if (email.value == "") {
                erroremail.innerText = "* Please enter your email!";
                email.focus();
                return false;
            }
            var regExp = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
            if (!regExp.test(email.value)) {
                erroremail.innerText = "* Please enter the correct email address!";
                email.value = "";
                email.focus();
                return false;
            }
            var phone = document.getElementById("phone");
            var errorphone = document.getElementById("errorphone");
            if (phone.value == "") {
                errorphone.innerText = "* Please enter your phone number!";
                phone.focus();
                return false;
            }
            var myreg = /^[0-9]+.?[0-9]*/;
            if (!myreg.test(phone.value)) {
                errorphone.innerText = "* Please enter the correct phone number!";
                phone.value = "";
                phone.focus();
                return false;
            }
            var message = document.getElementById("message");
            var errormessage = document.getElementById("errormessage");
            if (message.value == "") {
                errormessage.innerText = "* Please enter your message!"
                message.focus();
                event.preventDefault()

                return false;
            }

            setStorage();

            name.value = email.value = phone.value = message.value = "";
            errorname.innerText = erroremail.innerText = errorphone.innerText = errormessage.innerText = "";
            var box = document.getElementById("box");
            box.style.width = document.body.clientWidth + "px"
            box.style.height = document.body.clientHeight + "px"
            box.style.display = "block"
            showQuestions();
            return false

        }

    });

function ok() {
    var box = document.getElementById("box");
    box.style.display = "none"
}
$(document).ready(function () {
    $("#icon-swing").click(function () {
        $("#information-box").toggle();
        showQuestions();
    });
});

var questions = []

function setStorage() {
    if (localStorage.getItem('message') != null) {
        questions = JSON.parse(localStorage.getItem('message'));
    }
    questions.push({
        "message": $("#message").val()
    })
    localStorage.setItem("message", JSON.stringify(questions));

}

function getStorage() {
    questions = JSON.parse(localStorage.getItem('message')) || [];
    return questions;
}

function showQuestions() {
    questions = getStorage();
    var quest_list = ""
    if (questions.length != 0) {
        for (var i = 0; i < questions.length; i++) {
            quest_list += "<li>" + questions[i].message + "</li>";

        }
        $(".info_list").html(quest_list);
    }
    
}
