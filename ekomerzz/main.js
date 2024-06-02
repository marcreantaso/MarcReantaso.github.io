document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Perform validation or other actions if needed
    if (username && password) {
        // Redirect to the e-commerce page after successful login
        window.location.href = 'dropdown.html';
    } else {
        alert('Please enter both username and password.');
    }
});
