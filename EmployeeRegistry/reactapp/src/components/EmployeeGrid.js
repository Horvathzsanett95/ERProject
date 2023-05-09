import React, { useState, useEffect } from 'react';
import './EmployeeGrid.css';

const EmployeeGrid = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch('https://localhost:7178/api/EmployeeController');
                console.log(response);
                if (response.ok) {
                    const data = await response.json();
                    //console.log(data);
                    setEmployees(data);
                } else {
                    throw new Error('Failed to fetch employees');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchEmployees();
    }, []);

    return (
        <div>
            <h2>Employee Grid</h2>
            <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Phone Number</th>
                        <th>Organizational Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>{employee.phoneNumber}</td>
                            <td>{employee.organizationalUnit ? employee.organizationalUnit.name : "No org. unit added"}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeGrid;
