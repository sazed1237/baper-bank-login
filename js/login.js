document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('this is submited')

    const inputEmail = document.getElementById('input-email');
    const email = inputEmail.value;


    const inputPassword = document.getElementById('input-password');
    const password = inputPassword.value;
    console.log(email, password);


    if(email === 'sazed@gmail.com' && password === 'secret'){
        // console.log('this is valid')
        window.location.href='http://127.0.0.1:5500/bank.html'
    }
    else{
        alert('Password not valid')
    }
})