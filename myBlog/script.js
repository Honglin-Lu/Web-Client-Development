
    //窗口载入事件
    window.onload = (function () {
        //验证每一个input值是否为空，以及是否符合表单项业务规则（长度，类型，邮箱规则，手机规则），如果不符合规则，弹框告诉用户，并返回false

        //如果全部验证通过，则弹出提交成功框，用户点击了弹框中的确认按钮，跳转到首页
        document.getElementById("contactform").onsubmit = function (event) {
            
            var name = document.getElementById("name");
            if (name.value == "") {
                document.getElementById("errorname").innerText = "* Please enter your name!"
                name.focus()
                return false

            }
            var email = document.getElementById("email");
            if (email.value == "") {
                document.getElementById("erroremail").innerText = "* Please enter your email!";
                email.focus();
                return false;
            }
            var regExp = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
            if (!regExp.test(email.value)) {
                document.getElementById("erroremail").innerText = "* Please enter the correct email address!";
                email.value = "";
                email.focus();
                return false;
            }
            var phone = document.getElementById("phone");
            if (phone.value == "") {
                document.getElementById("errorphone").innerText = "* Please enter your phone number!";
                phone.focus();
                return false;
            }
            var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/;
            if (!myreg.test(phone.value)) {
                document.getElementById("errorphone").innerText = "* Please enter the correct phone number!";
                phone.value = "";
                phone.focus();
                return false;
            }
            var message = document.getElementById("message");
            if (message.value == "") {
                document.getElementById("errormessage").innerText = "* Please enter your message!"
                message.focus();
                event.preventDefault()

                return false;
            }

            //document.getElementById("biglayer").style.display = "block";
            //document.getElementById("biglayer").style.width = window.innerWidth;
            //document.getElementById("biglayer").style.height = window.innerHeight;
        }

    });

  
   