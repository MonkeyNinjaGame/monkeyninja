signup = async (email, password) => {
    const user = new Moralis.User();
    user.set("username", email);
    user.set("password", password);
    user.set("email", email);

    try {
    await user.signUp();
    } 
    catch (error) {
    alert("Error: " + error.code + " " + error.message);
    }
}

document.getElementById("signup").onclick = () => signup(document.getElementById("email").value, document.getElementById("password").value);

init();