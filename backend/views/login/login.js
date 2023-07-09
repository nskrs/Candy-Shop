async function login(e){
    try{
        e.preventDefault();
        const loginDetails = {
            email:e.target.email.value,
            password:e.target.password.value,
        }


        const response = await axios.post('http://localhost:3000/user/login',loginDetails)
        if(response.status === 200){
            alert(response.data.message)
            window.location.href = "../shop.html" 
        }
        else{
            throw new Error('Failed to Login')        }
    }
    catch(err){
        const errorMessage = document.createElement('div');
        errorMessage.style.color = 'red';
        errorMessage.innerText = err;
        e.target.appendChild(errorMessage);
    }
}