const loginButton = document.getElementById('loginbutton');
          const usernameInput = document.getElementById('Username');
          const passwordInput = document.getElementById('Password');
          const xicon = document.querySelector('.xicon');
        
          xicon.addEventListener('click', function() {
            window.location.href = 'Home.html';
          });

          loginbutton.addEventListener('click', function() {
              // Check if username and password are 'admin'
              if (usernameInput.value === 'admin' && passwordInput.value === 'admin') {
                    window.location.href = 'Admin.html'; 
                      } 
              else if(usernameInput.value === 'organization' && passwordInput.value === 'organization'){
                    window.location.href = 'Organization.html'; 
                      }
              else if(usernameInput.value === 'donor' && passwordInput.value === 'donor'){
                    window.location.href = 'Donor.html'; 
                      }
                      else {
                        alert('Invalid username or password. Please try again.');
                      }
           });