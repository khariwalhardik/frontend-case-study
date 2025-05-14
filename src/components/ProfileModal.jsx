import React from 'react';
import styles from './ProfileModal.module.css';
import MapComponent from './MapComponent';

const ProfileModal = ({ profile, onClose }) => {
  if (!profile) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>&times;</button>
        <div className={styles.contentWrapper}>
          <div className={styles.imageSection}>
            <img src={`/images/${profile.photo}`} alt={profile.name} className={styles.image} />
          </div>
          <div className={styles.infoSection}>
            <h2 className={styles.name}>{profile.name}</h2>
            <p className={styles.description}>{profile.description}</p>
            <p><strong>Location:</strong> {profile.location}</p>
            <p><strong>Interests:</strong> {(profile.interests || []).join(', ')}</p>
          </div>
        </div>
        <div className={styles.mapSection}>
          <MapComponent address={profile.address} />
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
