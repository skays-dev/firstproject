let resletter = /^[a-zA-Z ]+$/;
let resnumber = /^[0-9 ]+$/;



let name= document.getElementById('name');
let namecardimg= document.getElementById("namecardimg");
let errorname= document.getElementById('errorname');



name.addEventListener('keyup', function(){
    let testname=resletter.test(name.value);
    if(testname == true){
        errorname.textContent="";
        name.style.border='2px solid hsl(270, 3%, 87%)';
        namecardimg.textContent=this.value;
    }else{
        errorname.textContent="Wrong format, letters only";
        name.style.border='2px solid hsl(0, 100%, 66%)';
    }
})


let cvcmm= document.getElementById('cvcmm');
let mm= document.getElementById("mm");

let cvcyy= document.getElementById('cvcyy');
let yy = document.getElementById("yy");

let errormmyy=document.getElementById("errormmyy");

mm.addEventListener('keyup', function(){
    let testmm=resnumber.test(mm.value);
    if(testmm==true && mm.value>0 && mm.value<=12){
        errormmyy.textContent="";
        mm.style.border='2px solid hsl(270, 3%, 87%)'
        cvcmm.textContent=this.value;
    }else{
        errormmyy.textContent="Can't be blank";
        mm.style.border='2px solid hsl(0, 100%, 66%)'
    }
})

yy.addEventListener('keyup', function(){
    let testyy=resnumber.test(yy.value);
    if(testyy==true && yy.value>=22 && yy.value<=33){
        errormmyy.textContent="";
        yy.style.border='2px solid hsl(270, 3%, 87%)'
        cvcyy.textContent=this.value;
    }else{
        errormmyy.textContent="Can't be blank";
        yy.style.border='2px solid hsl(0, 100%, 66%)'
    }
    
})


let numbercardimg = document.getElementById('numbercardimg');
let cardnumber= document.getElementById('cardnumber');
let cardderror= document.getElementById("errorcardnumber");

cardnumber.addEventListener('keyup',function() {
    let testnumbercard=resnumber.test(cardnumber.value);
    if(testnumbercard==true && cardnumber.value.length==19){
        if(cardnumber.value.length==4 || cardnumber.value.length==9 || cardnumber.value.length==14){
            cardnumber.value+=" ";
        }
        numbercardimg.textContent=this.value;
        cardderror.textContent="";
        cardnumber.style.border='2px solid hsl(270, 3%, 87%)'
    }else{
        cardderror.textContent="Can't be blank";
        cardnumber.style.border='2px solid hsl(0, 100%, 66%)'
    }
})

let cvc=document.getElementById('cvc');
let cvcerror=document.getElementById('errorcvc');


cvc.addEventListener('keyup',function(){
    let testcvc=resnumber.test(cvc.value);
    if(testcvc==true){
        cvcerror.textContent="";
        cvc.style.border='2px solid hsl(270, 3%, 87%)';
    }else{
        cvcerror.textContent="Can't be blank";
        cvc.style.border='2px solid hsl(0, 100%, 66%)';
    }
})

var delete_form=document.querySelector(".right");
var tankyou=document.querySelector('.thankyou');


function onconfirmaion(){
    if(isvalid() == true){
        thankyou();
    }else{
        console.log(false);
    }
}

function thankyou(){
    delete_form.style.display='none';
    tankyou.removeAttribute('style');
    
}


function isvalid(){
    let checker=false;

    let testname=resletter.test(name.value);
    let testnumbercard=resnumber.test(cardnumber.value);
    let testmm=resnumber.test(mm.value);
    let testyy=resnumber.test(yy.value);
    let testcvc=resnumber.test(cvc.value);
    
    if(testname== true && name!=="" && name.value.length>5 && testnumbercard == true && cardnumber!=="" && cardnumber.value.length==19 && testmm==true && mm!=="" && testyy==true && yy!=="" && yy.value.length==2 && testcvc==true && cvc!=="" && cvc.value.length==3){
        checker=true;
    }else{
        name.style.border='2px solid hsl(0, 100%, 66%)';
        cardnumber.style.border='2px solid hsl(0, 100%, 66%)';
        mm.style.border='2px solid hsl(0, 100%, 66%)'
        yy.style.border='2px solid hsl(0, 100%, 66%)'
        cardnumber.style.border='2px solid hsl(0, 100%, 66%)'
        cvc.style.border='2px solid hsl(0, 100%, 66%)';
        checker=false;
    }
    return checker;
}