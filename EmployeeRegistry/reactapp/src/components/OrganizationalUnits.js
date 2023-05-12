import React, { useState } from 'react';
import './Home.css';
import OrganizationalUnitGrid from './OrganizationalUnitGrid'
import OrganizationalUnitModal from './OrganizationalUnitModal';

function OrganizationalUnits() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [organizationalUnits, setOrganizationalUnits] = useState([]);
    const [selectedOrganizationalUnit, setSelectedOrganizationalUnit] = useState(null);

    const onEditOrganizationalUnit = (organizationalUnit) => {
        setSelectedOrganizationalUnit(organizationalUnit);
        setIsModalOpen(true);
    };

    const onDeleteOrganizationalUnit = async (id) => {
        try {
            console.log(id);
            const response = await fetch('https://localhost:7178/api/OrganizationalUnitController', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(id),
            });

            if (response.ok) {
                fetchOrganizationalUnits();
            } else {
                throw new Error('Failed to delete organizational unit');
            }
        } catch (error) {
            console.error(error);
        }
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

    const handleSubmit = async (entity, isEditMode) => {
        if (isEditMode) {
            try {

                // Make a PUT request to the API endpoint to add the organizational unit
                const response = await fetch('https://localhost:7178/api/OrganizationalUnitController', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(entity),
                });
                console.log(response);
                // Check if the request was successful
                if (response.ok) {
                    console.log('Organizational unit edited successfully.');
                    setSelectedOrganizationalUnit(null);
                } else {
                    console.error('Failed to add organizational unit.');
                }
            } catch (error) {
                console.error('An error occurred while editing organizational unit:', error);
            }
        } else {
            try {

                // Make a POST request to the API endpoint to add the organizational unit
                const response = await fetch('https://localhost:7178/api/OrganizationalUnitController', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(entity),
                });
                console.log(response);
                // Check if the request was successful
                if (response.ok) {
                    setSelectedOrganizationalUnit(null);
                    console.log('Organizational unit added successfully.');
                } else {
                    console.error('Failed to add organizational unit.');
                }
            } catch (error) {
                console.error('An error occurred while adding organizational unit:', error);
            }
        }
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedOrganizationalUnit(null);
    };

    return (

        <div className="home-container">
            <button className="add-button" onClick={handleOpenModal}>Add Organizational Unit</button>
            <OrganizationalUnitGrid organizationalUnits={organizationalUnits} fetchOrganizationalUnits={fetchOrganizationalUnits} onDeleteOrganizationalUnit={onDeleteOrganizationalUnit} onEditOrganizationalUnit={onEditOrganizationalUnit} />
            <OrganizationalUnitModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} onOrganizationalUnitAdded={fetchOrganizationalUnits} organizationalUnitToEdit={selectedOrganizationalUnit} />
        </div>

    );
}

export default OrganizationalUnits;
