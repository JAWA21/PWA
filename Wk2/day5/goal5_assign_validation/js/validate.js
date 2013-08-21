/*
     Developed by the JavaScript team at Fullsail
     Validated by Jeanna Anderson
     Date: 1308/15/2013
*/

(function(){

    //accessing the dom elements and setting them to a variable
    var domElements = [
        username = document.getElementById('f_username'),
        email = document.getElementById('f_email'),
        phone = document.getElementById('f_phone'),
        social = document.getElementById('f_ssn'),
        pass = document.getElementById('f_password')
    ];

    console.log(domElements);

    myform.onsubmit = function(e){
        console.log('in the onsubmit function')

        //looping through the dom elements
        for(var i=0, max=domElements.length; i<max; i++){
            validateField(domElements[i]);  //id = is the form input field ID
            console.log("run");
        }

        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){
        console.log('in the validateField function');

        var pass = false; //instantiate the pass var
        var input = ""; //instantiate the input var
        console.log(inputName.name);

        //conditionals for each id checking the input of each
        if (inputName.name === 'f_username'){
            input = inputName.value;
            var pattern = /^\s*[a-zA-Z,\s]+\s*$/;
            pass = pattern.test(input);
            console.log('user');
        }
        else if(inputName.name === 'f_email'){
            input = inputName.value;
            var pattern = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*([,;]\s*\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)*/;
            pass = pattern.test(input);

        }
        else if(inputName.name === 'f_phone'){
            input = inputName.value;
            var pattern = /^[2-9]\d{2}-\d{3}-\d{4}$/;
            pass = pattern.test(input);

        }
        else if(inputName.name === 'f_social'){
            input = inputName.value;
            var pattern = /^\d{3}-\d{2}-\d{4}$/;
            pass = pattern.test(input);

        }
        else if(inputName.name === 'f_password'){
            input = inputName.value;
            var pattern = /^[a-zA-Z]\w{3,14}$/;
            pass = pattern.test(input);
        }

        //error message
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        //user feedback if pass is true or false
        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper



