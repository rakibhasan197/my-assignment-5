console.log('hello js')
document.getElementById('login').addEventListener('click', function(){
  const userName = document.getElementById('user-name')
  const userInput = userName.value;
  if(userInput !== 'admin'){
    alert('invalid')
    return
  }

  const inputPassword = document.getElementById('input-password');
  const inputValue = inputPassword.value;
  if(inputValue !== 'admin123'){
    alert('invalid password')
    return
  }
  window.location.assign('./homepage.html');
  
})