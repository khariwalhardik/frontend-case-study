import React, { useContext, useState } from 'react';
import { ProfileContext } from '../context/ProfileContext';
import styles from './AdminDashboard.module.css';

const defaultForm = {
  name: '',
  description: '',
  address: '',
  location: '',
  photo: '',
  contact: '',
  interests: '',
};

const AdminDashboard = () => {
  const { profiles, setProfiles } = useContext(ProfileContext);
  const [formData, setFormData] = useState(defaultForm);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedInterests = formData.interests.split(',').map((i) => i.trim());

    if (isEdit) {
      setProfiles((prev) =>
        prev.map((p) =>
          p.id === editId ? { ...formData, id: editId, interests: updatedInterests } : p
        )
      );
      setIsEdit(false);
      setEditId(null);
    } else {
      const newProfile = {
        ...formData,
        id: Date.now(),
        interests: updatedInterests,
      };
      setProfiles((prev) => [...prev, newProfile]);
    }

    setFormData(defaultForm);
    setModalVisible(false); // Close modal after submit
  };

  const handleEdit = (profile) => {
    setFormData({
      ...profile,
      interests: profile.interests.join(', ')
    });
    setIsEdit(true);
    setEditId(profile.id);
    setModalVisible(true); // Open modal in edit mode
  };

  const handleDelete = (id) => {
    setProfiles((prev) => prev.filter((p) => p.id !== id));
  };

  const handleOpenModal = () => {
    setModalVisible(true);
    setIsEdit(false); // Make sure we are in Add mode
    setFormData(defaultForm); // Reset form data
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Close the modal
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.formTitle}>{isEdit ? 'Edit Profile' : 'Add Profile'}</h2>
      
      <button onClick={handleOpenModal} className={styles.button}>Add New Profile</button>

      {/* Modal for adding/editing profiles */}
      <div className={`${styles.modal} ${modalVisible ? styles.show : ''}`}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>{isEdit ? 'Edit Profile' : 'Add New Profile'}</h3>
            <button onClick={handleCloseModal} className={styles.closeButton}>×</button>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className={styles.input} required />
            <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} className={styles.input} required />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className={styles.input} required />
            <input type="text" name="location" placeholder="Location (e.g., City, Country)" value={formData.location} onChange={handleChange} className={styles.input} required />
            <input type="file" name="photo" onChange={handleChange} className={styles.input} />
            <input type="email" name="contact" placeholder="Contact Email" value={formData.contact} onChange={handleChange} className={styles.input} required />
            <input type="text" name="interests" placeholder="Interests (comma-separated)" value={formData.interests} onChange={handleChange} className={styles.input} required />
            <button type="submit" className={styles.button}>{isEdit ? 'Update' : 'Add'} Profile</button>
          </form>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>All Profiles</h2>
      <ul className={styles.profileList}>
        {profiles.map((p) => (
          <li key={p.id} className={styles.profileItem}>
            <strong>{p.name}</strong><br />
            <span>{p.description}</span><br />
            <small>{p.location}</small>
            <div className={styles.actions}>
              <button onClick={() => handleEdit(p)} className={`${styles.actionButton} ${styles.edit}`}>Edit</button>
              <button onClick={() => handleDelete(p.id)} className={`${styles.actionButton} ${styles.delete}`}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
