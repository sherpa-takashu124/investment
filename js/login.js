const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('login');
const container = document.getElementById('overlay_container');

signUpButton.addEventListener('click', () => {
    console.log('click')
    container.classList.add("left-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("left-panel-active");
});