import React, { useState } from 'react';
import styles from './Dataadd.module.css';
import { useNavigate } from 'react-router-dom';
// Initialize Firebase
import { db } from '../firebase.config';
import { collection, addDoc } from 'firebase/firestore';


const AddingData = () => {
  // Define state variables for form fields
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    choice: 'Restaurant',
    address: '',
    location: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add the form data to Firestore
      const docRef = await addDoc(collection(db, 'Request_add_data'), {
        name: formData.name,
        email: formData.email,
        choice: formData.choice,
        address: formData.address,
        location: formData.location,
      });

      console.log("Document written with ID: ", docRef.id);
      navigate('/')
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // ... (rest of the code)


  return (
    <div className={styles.dataform}>
      <form onSubmit={handleSubmit}>
        <h1>Data Form</h1>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <p>Choose Any of the one</p>
        <select
          id="choice"
          name="choice"
          value={formData.choice}
          onChange={handleInputChange}
          required
        >
          <option value="Restaurant">Restaurant</option>
          <option value="Theatre">Theatre</option>
          <option value="Hospitals">Hospitals</option>
          <option value="Shops">Shops</option>
          <option value="Sites">Sites</option>
        </select>

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          required
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddingData;
