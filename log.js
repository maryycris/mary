function toggleForms() {
    var loginContainer = document.getElementById('loginC');
    var signupContainer = document.getElementById('signupContainer');
  
    loginContainer.style.display = loginContainer.style.display === 'none' ? 'block' : 'none';
    signupContainer.style.display = signupContainer.style.display === 'none' ? 'block' : 'none';
  }
  
  document.getElementById('showSignUp').addEventListener('click', function(event) {
    event.preventDefault();
    toggleForms();
  });
  
  document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    toggleForms();
  });
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;
  
    var users = JSON.parse(localStorage.getItem('users')) || [];
  
    const foundUser = users.find(user => user.username === username && user.password === password);
  
    if (foundUser) {
      alert('Login successful!');
      
      window.location.href = 'numsys.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });
  
  
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var newUsername = document.getElementById('signupUsername').value;
    var newPassword = document.getElementById('signupPassword').value;
  
    var users = JSON.parse(localStorage.getItem('users')) || [];
  
    const isUsernameTaken = users.some(user => user.username === newUsername);
  
    if (isUsernameTaken) {
      alert('Username is already taken. Please choose another.');
    } else {
      
      users.push({ username: newUsername, password: newPassword });
      localStorage.setItem('users', JSON.stringify(users));
  
      alert('Sign Up successful!');
      toggleForms();
    }
  });