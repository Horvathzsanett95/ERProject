import React from 'react';

const AddButton = ({ onAdd }) => {
  const handleAdd = () => {
      const mockEntity = {
          id: 0,
          name: "John Doe",
          active: true,
          position: "Developer",
          phoneNumber: "+36-20-123-4567",
          username: "johndoe",
          password: "password123",
          supervisor: "Jane Doe"
      };


    // Call the onAdd callback function with the mock entity
    onAdd(mockEntity);
  };

  return (
    <button onClick={handleAdd}>Add Employee</button>
  );
};

export default AddButton;