async function signup(e){
    try{
        e.preventDefault();
        const signupDetails = {
            name:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value,
        }

        // console.log(signupDetails)

        const response = await axios.post('http://localhost:3000/user/signup',signupDetails)
        if(response.status === 201){
            window.location.href = "../login/login.html" 
        }
        else{
            throw new Error('Failed to SignUp')        }
    }
    catch(err){
        const errorMessage = document.createElement('div');
        errorMessage.style.color = 'red';
        errorMessage.innerText = err;
        e.target.appendChild(errorMessage);
    }
}