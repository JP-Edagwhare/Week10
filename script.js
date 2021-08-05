let user = {
    name: 'James',
    age: 22,
};

const userPara = document.getElementById('users');
// JSON.parse(window.localStorage.getItem('user'));

function signIn() {
    window.localStorage.setItem('user', JSON.stringify(user));
    userPara.textContent = `Welcome ${user.name} ${user.age}`;
}

// function getUser() {


// }
// getUser();

function signOut() {
    localStorage.removeItem('user');
    userPara.textContent = '';
}
