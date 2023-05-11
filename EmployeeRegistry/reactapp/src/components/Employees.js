import React, { useState, useEffect } from 'react';
import EmployeeGrid from './EmployeeGrid';
import EmployeeModal from './EmployeeModal';

function Employees() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [organizationalUnits, setOrganizationalUnits] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const onDeleteEmployee = async (id) => {
        try {
            console.log(typeof(id));
            const response = await fetch('https://localhost:7178/api/EmployeeController/', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(id),
            });

            if (response.ok) {
                fetchEmployees();
            } else {
                throw new Error('Failed to delete employee');
            }
        } catch (error) {
            console.error(error);
        }
    }

    const onEditEmployee = (employee) => {
        setSelectedEmployee(employee);
        setIsModalOpen(true);
    };

    const fetchEmployees = async () => {
        try {
            const response = await fetch('https://localhost:7178/api/EmployeeController');
            if (response.ok) {
                const data = await response.json();
                setEmployees(data);
            } else {
                throw new Error('Failed to fetch employees');
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        

        const fetchOrganizationalUnits = async () => {
            try {
                const response = await fetch('https://localhost:7178/api/OrganizationalUnitController');
                if (response.ok) {
                    const data = await response.json();
                    setOrganizationalUnits(data);
                } else {
                    throw new Error('Failed to fetch organizational units');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchEmployees();
        fetchOrganizationalUnits();
    }, []);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedEmployee(null);
    };

    const handleSubmit = async (entity, isEditMode) => {
        if (isEditMode) {
            try {

                // Make a PUT request to the API endpoint to add the employee
                const response = await fetch('https://localhost:7178/api/EmployeeController', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(entity),
                });
                console.log(response);
                // Check if the request was successful
                if (response.ok) {
                    console.log('Employee edited successfully.');
                    setSelectedEmployee(null);
                } else {
                    console.error('Failed to add employee.');
                }
            } catch (error) {
                console.error('An error occurred while editing employee:', error);
            }
        } else {
            try {

                // Make a POST request to the API endpoint to add the employee
                const response = await fetch('https://localhost:7178/api/EmployeeController', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(entity),
                });
                console.log(response);
                // Check if the request was successful
                if (response.ok) {
                    setSelectedEmployee(null);
                    console.log('Employee added successfully.');
                } else {
                    console.error('Failed to add employee.');
                }
            } catch (error) {
                console.error('An error occurred while adding employee:', error);
            }
        } 
    };

    return (

        <div className="home-container">
            <button className="add-button" onClick={handleOpenModal}>Add Employee</button>
            <EmployeeModal isOpen={isModalOpen} onClose={handleCloseModal} supervisors={employees} organizationalUnits={organizationalUnits} onSubmit={handleSubmit} onEmployeeAdded={fetchEmployees} employeeToEdit={selectedEmployee} />
            <EmployeeGrid employees={employees} fetchEmployees={fetchEmployees} onDeleteEmployee={onDeleteEmployee} onEditEmployee={onEditEmployee} />
        </div>

    );
}

export default Employees;