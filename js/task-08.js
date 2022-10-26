const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault(); 
    const data = {
        email: event.currentTarget.email.value,
        password: event.currentTarget.password.value,
    }

    if (data.email && data.password !== "") {
        console.log(data);
        formEl.reset();
    } else {
        window.alert('Fill in all fields!');
    }
}
