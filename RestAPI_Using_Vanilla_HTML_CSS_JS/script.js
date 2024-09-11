/*
   REST API : https://dummy.restapiexample.com/#google_vignette

   To Fix error :  
     Failed to load resource: the server responded with a status of 429 () 
     dummy.restapiexample.com/api/v1/employees:1
    
   Just clear cached images and files / cookies and other site data under advanced in your brower 
   
   And it is recommended to use Live server(Ritwick Dey)extension in code editor (Vs code) 
*/

// Get all employee data
document.getElementById('fetch-btn').addEventListener('click', function() {
  fetch('https://dummy.restapiexample.com/api/v1/employees')
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        displayEmployees(data.data);
      } else {
        console.error('Failed to fetch data');
      }
    })
    .catch(error => console.error('Error:', error));
});

function displayEmployees(employees) {
  const employeeContainer = document.getElementById('employee-container');
  employeeContainer.innerHTML = ''; // Clear previous content

  employees.forEach(employee => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${employee.profile_image || 'https://via.placeholder.com/100'}" alt="Profile Image">
      <h3>${employee.employee_name}</h3>
      <p><strong>Age:</strong> ${employee.employee_age}</p>
      <p><strong>Salary:</strong> $${employee.employee_salary}</p>
    `;

    employeeContainer.appendChild(card);
  });
}

// Get a single employee data