import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './EmployeeModal.css'

const EmployeeModal = ({ isOpen, onClose, supervisors, organizationalUnits, onSubmit, onEmployeeAdded, employeeToEdit }) => {
    const [formData, setFormData] = useState({
        name: '',
        active: true,
        position: '',
        phoneNumber: '',
        username: '',
        password: '',
        supervisor: null,
        organizationalUnitId: null,
    });

    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (employeeToEdit) {
            setFormData(employeeToEdit);
            setIsEditMode(true);
        } else {
            setFormData({
                name: "",
                active: true,
                position: "",
                phoneNumber: "",
                username: "",
                password: "",
                supervisor: null,
                organizationalUnitId: null,
            });
            setIsEditMode(false);
        }
    }, [employeeToEdit]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(isEditMode);
        onSubmit(formData, isEditMode)
                .then(() => {
                onEmployeeAdded(); 
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
            <h2 className="modal-title">{isEditMode ? "Edit Employee" : "Add Employee"}</h2>

      <form className="modal-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="active">Active:</label>
          <input type="checkbox" id="active" name="active" checked={formData.active} onChange={() => setFormData({ ...formData, active: !formData.active })} />
        </div>

        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <input type="text" id="position" name="position" value={formData.position} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" title="Password must contain at least 8 characters, including uppercase, lowercase letters and numbers" value={formData.password} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="supervisor">Supervisor:</label>
          <select id="supervisor" name="supervisor" value={formData.supervisor} onChange={handleChange}>
            <option value="">None</option>
            {supervisors.map((supervisor) => (
              <option key={supervisor.id} value={supervisor.name}>
                {supervisor.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="organizationalUnitId">Organizational Unit:</label>
          <select id="organizationalUnitId" name="organizationalUnitId" value={formData.organizationalUnitId} onChange={handleChange}>
            <option value="">None</option>
            {organizationalUnits.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.name}
              </option>
            ))}
          </select>
        </div>

        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>Close</button>
          <button className="modal-button" type="submit">Save</button>
        </div>
      </form>
    </Modal>
    );
};

export default EmployeeModal;