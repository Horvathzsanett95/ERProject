import React, { useState } from 'react';
import './Home.css';
import OrganizationalUnitGrid from './OrganizationalUnitGrid.js'

function OrganizationalUnits() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [organizationalUnits, setOrganizationalUnits] = useState([]);

    const onEditOrganizationalUnit = () => {

    }

    const onDeleteOrganizationalUnit = () => {

    }

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
    }

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    return (

        <div className="home-container">
            <button className="add-button" onClick={handleOpenModal}>Add Organizational Unit</button>
            <OrganizationalUnitGrid organizationalUnits={organizationalUnits} fetchOrganizationalUnits={fetchOrganizationalUnits} onDeleteOrganizationalUnit={onDeleteOrganizationalUnit} onEditOrganizationalUnit={onEditOrganizationalUnit} />
        </div>

    );
}

export default OrganizationalUnits;
