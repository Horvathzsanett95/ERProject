import React from 'react';
import './Home.css';
import AddButton from './AddButton';

function Home() {
    const handleAdd = async (entity) => {
        try {
            // Make a POST request to the API endpoint to add the employee
            const response = await fetch('https://localhost:7178/api/EmployeeController', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(entity),
            });

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
          <AddButton onAdd={handleAdd} />
      </div>

  );
}

export default Home;