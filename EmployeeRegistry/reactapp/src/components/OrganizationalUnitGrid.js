import React, { useEffect } from 'react';
import './Grid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const OrganizationalUnitGrid = ({ organizationalUnits, fetchOrganizationalUnits, onDeleteOrganizationalUnit, onEditOrganizationalUnit }) => {

    useEffect(() => {
        fetchOrganizationalUnits();
    }, []);

    return (
        <div>
            <h2>Organizational Unit Grid</h2>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Acronym</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {organizationalUnits.map((organizationalUnit) => (
                            <tr key={organizationalUnit.id}>
                                <td>{organizationalUnit.name}</td>
                                <td>{organizationalUnit.acronym}</td>
                                <td>
                                    <button onClick={() => onEditOrganizationalUnit(organizationalUnit)}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button onClick={() => onDeleteOrganizationalUnit(organizationalUnit)}>
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

export default OrganizationalUnitGrid;
