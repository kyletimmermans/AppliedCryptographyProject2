var next_click=document.querySelectorAll(".next-click");
var back_click=document.querySelectorAll(".back-click");
var submit_click=document.querySelectorAll(".submit-click");
var main_form=document.querySelectorAll(".main");
var list=document.querySelectorAll(".progress-bar li")
let formnumber=0;

next_click.forEach(function(next_page){
    next_page.addEventListener('click',function(){
         if(!validateform()){
        return false;
        }
         formnumber++;
         updateform();
         progress_forward();
    });
});

back_click.forEach(function(back_page){
    back_page.addEventListener('click',function(){
         formnumber--;
         updateform();   
    });
});

submit_click.forEach(function(submit){
    submit.addEventListener('click',function(){
        var form_options=document.querySelectorAll(".main input");
        var i = 0;
        var options = [];
        while (i < form_options.length) {
            if (form_options[i].checked){
                options.push(form_options[i].id);
            }
            i++;
        }
        console.log(options);
        if (options.includes('quantum-yes')) {
            location.href = '/post-quantum';
        }
    });
});

function progress_forward(){
    list[formnumber].classList.add('active');
}

function updateform(){
    main_form.forEach(function(main_number){ 
       main_number.classList.remove('active'); 
    });
    main_form[formnumber].classList.add('active');
} 
 
function validateform(){
    validate=false;
    var validate_form=document.querySelectorAll(".main.active input");
    var i = 0;
    while (!validate && i < validate_form.length) {
        if (validate_form[i].checked){
            console.log(validate_form[i].id);
            validate = true;
        }
        i++;        
    }
    if(!validate){
        alert("Please select an option");
    }
    return validate;
}