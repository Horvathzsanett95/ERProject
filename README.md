# Employee Registry

## Description

Employee Registry is a web application that allows for the management and tracking of employees and organizational units. It provides functionalities to add, update, and delete employee records, as well as manage organizational units.

## Features

- Add new employees with their relevant information such as name, position, contact details, etc.
- View a list of all employees in the registry.
- Update employee details such as position, contact information, etc.
- Delete employees from the registry.
- Add and manage organizational units.
- Assign employees to specific organizational units.
- Responsive and user-friendly interface.

## Technologies Used

- Frontend:
  - React: JavaScript library for building the user interface.
  - CSS: Styling the user interface.

- Backend:
  - ASP.NET Core: Web framework for building the backend API.
  - Microsoft SQL Server: Relational database for storing employee and organizational unit data.

## Installation

Follow these steps to install and run the Employee Registry application:

1. Clone the repository.
2. Set up the MSSQL database and update the connection string in the backend configuration.
3. Build and run the backend API.
4. Navigate to the frontend directory.
5. Install the dependencies using `npm install`.
6. Start the frontend application using `npm start`.
7. Open your web browser and visit `http://localhost:3000` to access the application.

## API Endpoints

The backend API provides the following endpoints:

### EmployeeController

- `POST /api/EmployeeController/AddAsync`: Add a new employee.
- `DELETE /api/EmployeeController/DeleteAsync`: Delete an employee by ID.
- `GET /api/EmployeeController/GetActiveEmployeesAsync`: Get a list of all active employees.
- `PUT /api/EmployeeController/UpdateAsync`: Update an existing employee.

### OrganizationalUnitController

- `POST /api/OrganizationalUnitController/AddAsync`: Add a new organizational unit.
- `DELETE /api/OrganizationalUnitController/DeleteAsync`: Delete an organizational unit by ID.
- `GET /api/OrganizationalUnitController/GetActiveOrganizationalUnitAsync`: Get a list of all active organizational units.
- `PUT /api/OrganizationalUnitController/UpdateAsync`: Update an existing organizational unit.


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.
