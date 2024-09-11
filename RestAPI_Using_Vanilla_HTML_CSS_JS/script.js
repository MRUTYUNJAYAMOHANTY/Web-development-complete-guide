/*
   REST API : https://dummy.restapiexample.com/#google_vignette

   To Fix error :  
     Failed to load resource: the server responded with a status of 429 () 
     dummy.restapiexample.com/api/v1/employees:1
    
   Just clear cached images and files / cookies and other site data under advanced in your brower 
   
   And it is recommended to use Live server(Ritwick Dey)extension in code editor (Vs code) 
*/

document.addEventListener('DOMContentLoaded', function () {
  const homePage = document.getElementById('home-page');
  const backButtonContainer = document.getElementById('back-button-container');
  const backButton = document.getElementById('back-button');
  const employeeCards = document.getElementById('employee-cards');
  const employeeForm = document.getElementById('employee-form');
  const createEmployeeButton = document.getElementById('create-employee-button');
  const fetchAllButton = document.getElementById('fetch-all-employees');
  const fetchSingleButton = document.getElementById('fetch-single-employee');
  
  // API Endpoints
  const baseUrl = 'https://dummy.restapiexample.com/api/v1';
  const createUrl = `${baseUrl}/create`;
  const updateUrl = `${baseUrl}/update/21`;
  const deleteUrl = `${baseUrl}/delete/2`;
  
  // Fetch all employees
  fetchAllButton.addEventListener('click', function () {
      fetch(`${baseUrl}/employees`)
          .then(response => response.json())
          .then(data => {
              displayEmployees(data.data);
              hideHomePage();
          })
          .catch(err => console.log(err));
  });

  // Fetch a single employee
  fetchSingleButton.addEventListener('click', function () {
      fetch(`${baseUrl}/employee/1`)
          .then(response => response.json())
          .then(data => {
              displayEmployees([data.data]);
              hideHomePage();
          })
          .catch(err => console.log(err));
  });

  // Display employee cards
  function displayEmployees(employees) {
      employeeCards.innerHTML = '';
      employees.forEach(employee => {
          const card = document.createElement('div');
          card.classList.add('card');
          card.innerHTML = `
              <h3>${employee.employee_name}</h3>
              <p>Salary: ${employee.employee_salary}</p>
              <p>Age: ${employee.employee_age}</p>
              <button class="create">Create Employee</button>
              <button class="update">Update Employee</button>
              <button class="delete">Delete Employee</button>
          `;
          employeeCards.appendChild(card);

          // Handle create employee button
          card.querySelector('.create').addEventListener('click', function () {
              showCreateForm();
          });

          // Handle update employee button
          card.querySelector('.update').addEventListener('click', function () {
              showUpdateForm(employee);
          });

          // Handle delete employee button
          card.querySelector('.delete').addEventListener('click', function () {
              deleteEmployee(employee.id);
          });
      });
      employeeCards.style.display = 'flex';
  }

  // Hide home page and show cards or forms
  function hideHomePage() {
      homePage.style.display = 'none';
      backButtonContainer.style.display = 'block';
  }

  // Show create form
  function showCreateForm() {
      employeeForm.style.display = 'block';
      employeeCards.style.display = 'none';
      createEmployeeButton.addEventListener('click', function (event) {
          event.preventDefault();
          createEmployee();
      });
  }

  // Create employee
  function createEmployee() {
      const name = document.getElementById('employee-name').value;
      const salary = document.getElementById('employee-salary').value;
      const age = document.getElementById('employee-age').value;

      fetch(createUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              name: name,
              salary: salary,
              age: age,
          }),
      })
      .then(response => response.json())
      .then(data => {
          alert('Employee created successfully');
          resetForm();
          employeeForm.style.display = 'none';
          employeeCards.style.display = 'flex';
      })
      .catch(err => console.log(err));
  }

  // Update employee form
  function showUpdateForm(employee) {
      document.getElementById('employee-name').value = employee.employee_name;
      document.getElementById('employee-salary').value = employee.employee_salary;
      document.getElementById('employee-age').value = employee.employee_age;

      employeeForm.style.display = 'block';
      employeeCards.style.display = 'none';
      createEmployeeButton.textContent = 'Update';
      createEmployeeButton.addEventListener('click', function (event) {
          event.preventDefault();
          updateEmployee(employee.id);
      });
  }

  // Update employee
  function updateEmployee(id) {
      const name = document.getElementById('employee-name').value;
      const salary = document.getElementById('employee-salary').value;
      const age = document.getElementById('employee-age').value;

      fetch(updateUrl.replace('21', id), {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              name: name,
              salary: salary,
              age: age,
          }),
      })
      .then(response => response.json())
      .then(data => {
          alert('Employee updated successfully');
          resetForm();
          employeeForm.style.display = 'none';
          employeeCards.style.display = 'flex';
      })
      .catch(err => console.log(err));
  }

  // Delete employee
  function deleteEmployee(id) {
      fetch(deleteUrl.replace('2', id), {
          method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {
          alert('Employee deleted successfully');
      })
      .catch(err => console.log(err));
  }

  // Reset form
  function resetForm() {
      document.getElementById('employee-name').value = '';
      document.getElementById('employee-salary').value = '';
      document.getElementById('employee-age').value = '';
      createEmployeeButton.textContent = 'Create';
  }

  // Handle back button
  backButton.addEventListener('click', function () {
      employeeCards.style.display = 'none';
      employeeForm.style.display = 'none';
      homePage.style.display = 'block';
      backButtonContainer.style.display = 'none';
  });
});
