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
        } else if (shortcircuit()){
            formnumber = 4
            updateform();
        }
        formnumber++;
        updateform();
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
        if (options.includes('type-quantum')) {
            location.href = '/gottesman';
        } else if (options.includes('speedup-yes')) {
            location.href = '/lamport';
        } else if (options.includes('speed-fast')) {
            location.href = '/ecdsa';
        } else if (options.includes('purpose-gov')) {
            location.href = '/dsa';
        } else if (options.includes('purpose-easy')) {
            location.href = '/rsa';
        } else if (options.includes('special-threshold')) {
            location.href = '/threshold';
        } else if (options.includes('special-anonymous')) {
            location.href = '/ring';
        } else if (options.includes('special-designated')) {
            location.href = '/designated';
        } else {
            location.href = '/schnorr';
        }
    });
});

function updateform(){
    main_form.forEach(function(main_number){ 
       main_number.classList.remove('active'); 
    });
    main_form[formnumber].classList.add('active');
    list.forEach(function(list_number){ 
        list_number.classList.remove('active'); 
    });
    for(var i = 0; i <= formnumber; i++){
        list[i].classList.add('active');
    }
} 

function shortcircuit(){
    current_checked = null;
    short_circuit = ['type-quantum', 'speedup-yes', 'speed-fast', 'purpose-easy', 'purpose-gov'];
    var validate_form=document.querySelectorAll(".main.active input");
    var i = 0;
    while (i < validate_form.length) {
        if (validate_form[i].checked){
            current_checked = validate_form[i].id;
            break;
        }
        i++;        
    }
    if(short_circuit.includes(current_checked)){
        return true;
    }
    return false;
}

function validateform(){
    validate=false;
    current_checked = null;
    var validate_form=document.querySelectorAll(".main.active input");
    var i = 0;
    while (!validate && i < validate_form.length) {
        if (validate_form[i].checked){
            console.log(validate_form[i].id);
            validate = true;
            break;
        }
        i++;        
    }
    if(!validate){
        alert("Please select an option");
    }
    return validate;
}