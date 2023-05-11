import React, { useEffect } from 'react';
import './Grid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const EmployeeGrid = ({ employees, fetchEmployees, onDeleteEmployee, onEditEmployee }) => {

    useEffect(() => {
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
                            <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>{employee.phoneNumber}</td>
                            <td>{employee.organizationalUnit ? employee.organizationalUnit.name : "No org. unit added"}</td>
                            <td>
                                <button onClick={() => onEditEmployee(employee)}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button onClick={() => onDeleteEmployee(employee.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeGrid;
