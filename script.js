document.addEventListener('DOMContentLoaded', function (event){
    const form=document.getElementById('registration-form')
    const feedbackDiv=document.getElementById('form-feedback')
    form.addEventListener('submit', event=>{
        event.preventDefault()
        const username=document.getElementById('username').value.trim()
        const email=document.getElementById('email').value.trim()
        const password=document.getElementById('password').value.trim()
        const isValid=true
        const messages =[]
        if(username.length<3){
            isValid=false;
            messages.push('Username not valid')
        }
        if(!/.+@.+\..+/.test(email)){
            isValid=false;
            messages.push('Email not valid')
        }
        if(!password.length>=8){
            isValid=false;
            messages.push('Password not valid')
        }
        feedbackDiv.style.display='block'
        if(isValid){
            feedbackDiv.textContent='Registration successful!'
            feedbackDiv.style.color='#28a745'
        }
        else {
            feedbackDiv.innerHTML= messages.join('<br>')
            feedbackDiv.style.color='#dc3545'
        }
    })
})