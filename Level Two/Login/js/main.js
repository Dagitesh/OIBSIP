document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Perform authentication
    if (username === 'admin' && password === 'password') {
      // Authentication successful
      window.location.href = 'welcome.html';
    } else {
    
      alert('Invalid username or password. Please try again.');
    }
  });