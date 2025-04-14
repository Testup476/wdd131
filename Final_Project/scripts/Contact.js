

const send = document.getElementById("sendBt");
const name = document.getElementById("Email");
const email = document.getElementById("email");
const msg = document.getAnimations("message");
name.focus();

send.addEventListener('click', () => {
    alert("message succefully sent");
    name.value = '';
    email.value = '';
    msg.value = '';
    name.focus();

})
