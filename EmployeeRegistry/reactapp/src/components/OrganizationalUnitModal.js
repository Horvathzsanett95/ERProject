import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './OrganizationalUnitModal.css'

const OrganizationalUnitModal = ({ isOpen, onClose, onSubmit, onOrganizationalUnitAdded, organizationalUnitToEdit }) => {
    const [formData, setFormData] = useState({
        name: '',
        acronym: '',
        active: true
    });

    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (organizationalUnitToEdit) {
            setFormData(organizationalUnitToEdit);
            setIsEditMode(true);
        } else {
            setFormData({
                name: '',
                acronym: '',
                active: true
            });
            setIsEditMode(false);
        }
    }, [organizationalUnitToEdit]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(isEditMode);
        onSubmit(formData, isEditMode)
            .then(() => {
                onOrganizationalUnitAdded();
                onClose();
            })
            .catch((error) => {
                console.error(error);
            });
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="modal"
        >
            <h2 className="modal-title">{isEditMode ? "Edit Organizational Unit" : "Add Organizational Unit"}</h2>

            <form className="modal-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="acronym">Acronym:</label>
                    <input type="text" id="acronym" name="acronym" value={formData.acronym} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="active">Active:</label>
                    <input type="checkbox" id="active" name="active" checked={formData.active} onChange={() => setFormData({ ...formData, active: !formData.active })} />
                </div>

                
                <div className="modal-footer">
                    <button className="modal-button" onClick={onClose}>Close</button>
                    <button className="modal-button" type="submit">Save</button>
                </div>
            </form>
        </Modal>
    );
};

export default OrganizationalUnitModal;