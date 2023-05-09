import React, { useState, useEffect } from 'react';
import './Home.css';
import EmployeeGrid from './EmployeeGrid';
import EmployeeModal from './EmployeeModal';

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [supervisors, setSupervisors] = useState([]);
    const [organizationalUnits, setOrganizationalUnits] = useState([]);

    useEffect(() => {
        const fetchSupervisors = async () => {
            try {
                const response = await fetch('https://localhost:7178/api/EmployeeController');
                if (response.ok) {
                    const data = await response.json();
                    setSupervisors(data);
                } else {
                    throw new Error('Failed to fetch supervisors');
                }
            } catch (error) {
                console.error(error);
            }
        };

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

        fetchSupervisors();
        fetchOrganizationalUnits();
    }, []);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = async (entity) => {
        // Az adatok feldolgozása vagy továbbítása a backend felé
        console.log(entity);
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
                console.log('Employee added successfully.');
            } else {
                console.error('Failed to add employee.');
            }
        } catch (error) {
            console.error('An error occurred while adding employee:', error);
        }
    };

  return (
    <div className="home-container">
      <h1 className="greeting">Welcome to our Employee Registry</h1>
          <p className="description">This is a platform where you can easily manage your employees' information and keep track of their performance. You can view, add, edit and delete employee records. </p>
          <button onClick={handleOpenModal}>Add Employee</button>
          <EmployeeModal isOpen={isModalOpen} onClose={handleCloseModal} supervisors={supervisors} organizationalUnits={organizationalUnits} onSubmit={handleSubmit} />
          <EmployeeGrid />
      </div>

  );
}

export default Home;