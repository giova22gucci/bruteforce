document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username and password are correct
    if (username === 'giovanni' && password === 'cazzoinculo') {
        // Redirect to the success page
        window.location.href = 'success.html';
    } else {
        // Display error message
        document.getElementById('login-error').innerText = 'Invalid username or password';
    }
});
