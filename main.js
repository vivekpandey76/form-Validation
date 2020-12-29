console.log("Hello world")
const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validDate();
})
const sendData=(sRate,count)=>{
    console.log(count);
    if(sRate===count){
        alert("Welcome to Vivek Github account");
        location.replace("https://github.com/vivekpandey76");
    }
 }
//final succesmg

 const successMsg=()=>{
     let formCon=document.getElementsByClassName('form-control');
     var count=formCon.length-1;     
        for(let i=0;i<formCon.length;i++){
        if(formCon[i].className=="form-control success"){
            var sRate=0+i;
            sendData(sRate,count);
        }else{
            return false;
        }
     }
 }
//More email value
const isEmail=(emailVal)=>{
    var atSymbol=emailVal.indexOf("@");
    if(atSymbol<1){
        return false;
    }
    var dot=emailVal.lastIndexOf('.');
    if(dot<=atSymbol+2){
        return false;
    }
    if(dot===emailVal.length-1){
        return false;
    }
    return true;
}
const validDate =()=>{
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const phoneVal=phone.value.trim();
    const passwordVal=password.value.trim();
    const cpasswordVal=cpassword.value.trim();
    //Validate username
    if(usernameVal===""){
        setErrorMsg(username,'Username cannot be blank');
    }else if(usernameVal.length<=2){
        setErrorMsg(usernameVal,'username min 3 char');
    }else{
        setSuccessMsg(username);
    }
    //validate Email
    if(emailVal===""){
        setErrorMsg(email,'Email cannot be blank');
    }else if(!isEmail(emailVal)){
        setErrorMsg(email,'Not a valid Email');
    }else{
        setSuccessMsg(email);
    }
    //Validate PhoneNumber
    if(phoneVal===""){
        setErrorMsg(phone,"Phone number cannot be blank");
    }else if(phoneVal.length!=10){
        setErrorMsg(phone,"Your number should exact 10 digit")
    }else{
        setSuccessMsg(phone);
    }
    //Validate Password
    if(passwordVal==""){
        setErrorMsg(password,"Password should not be blank");
    }else if(passwordVal.lenght<6){
        setErrorMsg(password,"Your password should contain 6 alphabet")
    }else{
        setSuccessMsg(password);
    }
    //confirm password
    if(cpasswordVal!=passwordVal){
        setErrorMsg(cpassword,"Recheck the password")
    }else{
        setSuccessMsg(cpassword);
    }
    successMsg();
}
function setErrorMsg(input,errormsgs) {
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
    formControl.className="form-control error"               //We add error class in small so from css our error msg will display
    small.innerText=errormsgs;
}
function setSuccessMsg(input){
    const formControl=input.parentElement;
    formControl.className="form-control success"
}

